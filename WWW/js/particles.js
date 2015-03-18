	//PARTICLE PARAMS



	//ENVIRONMENT PARAMS
	var canvas = document.getElementById('projector');
	var VELOCITY = 1.5;
	
	var mouse = {
		x : 0,
		y : 0
	};
	var particles = [];
	var colors = [ "#D96363", "#798EE0", "#666" ];
	var backgroundColor = '#000';
	var context;
	var count = 0;
	var secret = false;
	if (canvas && canvas.getContext) {
		context = canvas.getContext('2d');
		Initialize();
		var num_particles = 50;
		for ( var i = 0; i < num_particles; i++) {
			particles.push({
				x : 0,
				y : 0,
				originX : Math.random() * canvas.width,
				originY : Math.random() * canvas.height,
				vx : ((Math.random() * (VELOCITY * 2)) - VELOCITY) + 2,
				vy : ((Math.random() * (VELOCITY * 2)) - VELOCITY) + 2,
				size : 1 + Math.random() * 6,
				currentSize : Math.random() * 25,
				accel : false,
				lock : false,
				color : colors[Math.floor(Math.random() * colors.length)]
			});
		}
	}

	function Initialize() {
		canvas.addEventListener('mousemove', MouseMove, false);
		window.addEventListener('mousedown', MouseDown, false);
		window.addEventListener('mouseup', MouseUp, false);
		window.addEventListener('resize', ResizeCanvas, false);
		setInterval(TimeUpdate, 20);
		ResizeCanvas();
	}
	
	function TimeUpdate(e) {
		clearCanvas();
		
		var len = particles.length;
		for ( var i = 0; i < len; i++) {
			particle = particles[i];

			flickerPart(particle);
			accelPart(particle);
			movePart(particle);
			drawPart(particle);
		}

		updateCounter();
	}

	//clear canvas, replace with background color variable
	function clearCanvas()  {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = backgroundColor; // set canvas background color
		context.fillRect(0, 0, canvas.width, canvas.height); // now fill the canvas
	}

	// make the particle pop back up to a random size
	function flickerPart(particle) {
		if (particle.currentSize < 3) {
			particle.currentSize = Math.random() * 25;
		} else {
			particle.currentSize *= .975;
		}
	}

	function accelPart(particle) {
		particle.x *= .9;
		particle.y *= .9;
	}
	
	function movePart(particle) {
		if (!particle.lock) {
			border(particle);
			particle.originX += particle.vx;
			particle.originY += particle.vy;
		}
	}
	function drawPart(particle) {
		if (Math.random() > .01) {
			context.fillStyle = particle.color;
			context.beginPath();
			context.arc(particle.originX + particle.x, particle.originY
					+ particle.y, particle.currentSize, 0, Math.PI * 2, true);
			context.closePath();
			context.fill();
		}
	}

	function border(particle) {
		if (particle.originX > canvas.width) {
			particle.originX = 0;
			particle.originY = Math.random() * canvas.height;
		} else if (particle.originX < 0) {
			particles.originX = canvas.width;
			particle.originY = Math.random() * canvas.height;
		} else {
		}

		if (particle.originY > canvas.height) {
			particle.originY = 0;
			particle.originX = Math.random() * canvas.height;
		} else if (particle.originY < 0) {
			particle.originY = canvas.height;
			particle.originX = Math.random() * canvas.height;
		} else {
		}
	}

	function updateCounter() {
		count++;
		if (count > 100) {
			release();
			count = 0;
		}
	}

	function MouseMove(e) {
		mouse.x = e.layerX;
		mouse.y = e.layerY;
	}

	function MouseDown(e) {
		Scatter();
	}
	function MouseUp(e) {
		release();
	}
	function ResizeCanvas(e) {
		canvas.width = canvas.parentNode.offsetWidth;
		canvas.height = canvas.parentNode.offsetHeight;
	}

	function release() {
		var len = particles.length;
		var particle;
		for ( var i = 0; i < len; i++) {
			particle = particles[i];
			particle.lock = false;
		}
	}

	//!! SHAPES   !!!
	function shapeAll(x, y, xfunc, yfunc, size, cs, l) {
		var len = particles.length;
		var particle;
		for ( var i = 0; i < len; i++) {
			particle = particles[i];
			var px = particle.originX + particle.x;
			var py = particle.originY + particle.y;
			var t = Math.random() * Math.PI * 2;
			particle.originX = x + size * xfunc(t) + Math.random() * 20;
			particle.originY = y + size * yfunc(t) + Math.random() * 20;
			particle.x = px - particle.originX;
			particle.y = py - particle.originY;
			particle.color = cs[Math.floor(Math.random() * cs.length)]
			particle.accel = true;
			particle.lock = l;
		}
		count = 0;
	}

	//SHAPE FUNCTIONS
	// BLEH X_X
	function Scatter() {
		var rcolors = [];
		for (var i = 0; i < 4; i++) {
			rcolors.push("#"+((1<<24)*Math.random()|0).toString(16));
		}
		shapeAll(0,0, ScatterXFunc, ScatterYFunc, 1, colors, false);
	}

	function ScatterXFunc(t) {return Math.random() * canvas.width;}
	function ScatterYFunc(t) {return Math.random() * canvas.height;}
	//HEARTS <3
	function Heart(x, y) {shapeAll(x, y, HeartXFunc, HeartYFunc, canvas.height/27,colors, true);}
	function HeartXFunc(t) {return 16 * Math.sin(t) * Math.sin(t) * Math.sin(t);}
	function HeartYFunc(t) {return -((13 * Math.cos(t)) - (5 * Math.cos(2 * t))	- (2 * Math.cos(3 * t)) - Math.cos(4 * t));}
	
	//CIRCLES :)
	function Circle(x, y) {	shapeAll(x, y, CircleXFunc, CircleYFunc, canvas.height/1.8,	colors, true);}
	function CircleXFunc(t) {return Math.cos(t);}
	function CircleYFunc(t) {return Math.sin(t);}