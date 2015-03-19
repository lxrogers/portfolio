var designer = $("#designer");
var engineer = $("#engineer");
var innovator = $("#innovator");


//Animate Three Words in
//----------------------------------------
function animateIntro() {
	var delayTime = 1200;
	
	setTimeout(function() {
		designer.animate(
			{'opacity':'1'},
			1000,
			"easeOutCubic"
		);
		Heart(canvas.width/2, canvas.height * 2/5);
	}, 1000 + delayTime);

	setTimeout(function() {
		engineer.animate(
			{'opacity':'1'},
			1000,
			"easeOutCubic"
		);
		Circle(canvas.width/2, canvas.height/2);
	}, 1000 + delayTime * 2);
	
	setTimeout(function() {
		innovator.animate(
			{'opacity':'1'},
			1000,
			"easeOutCubic"
		);
		MouseDown();

		addListeners();

	}, 1000 + delayTime * 3);
}

//Mouse Over Animation Listeners
//----------------------------------------------
function addListeners() {

	$('#designer-over').mouseover(function() {
		$('.iam').stop();
		designer.animate(
			{'font-size': '4.5em'},
			100,
			"easeOutExpo",
			shrink
		);

		Heart(canvas.width/2, canvas.height * 2/5);
	});
	
	$('#innovator-over').mouseover(function() {
		$('.iam').stop();
		innovator.animate(
			{'font-size': '4.5em'},
			100,
			"easeOutExpo",
			shrink
		);
		MouseDown();
	});

	$('#engineer-over').mouseover(function() {
		$('.iam').stop();
		engineer.animate(
			{'font-size': '4.5em'},
			100,
			"easeOutExpo",
			shrink
		);

		Circle(canvas.width/2, canvas.height/2);
	});
}



function shrink() {
	$('.iam').animate({'font-size':'4.2em'},
		400,
		"easeOutExpo");
}

animateIntro();