var designer = $("#designer");
var engineer = $("#engineer");
var innovator = $("#innovator");

var original_size = '3em';
var zoom_size = '3.5em';

//Animate Three Words in
//----------------------------------------
function animateIntro() {
	var delayTime = 1200;
	var initTime = 750;
	
	setTimeout(function() {
		designer.animate(
			{'opacity':'1'},
			1000,
			"easeOutCubic"
		);
		Heart(canvas.width/2, canvas.height * 2/5);
	}, initTime + delayTime);

	setTimeout(function() {
		engineer.animate(
			{'opacity':'1'},
			1000,
			"easeOutCubic"
		);
		Circle(canvas.width/2, canvas.height/2);
	}, initTime + delayTime * 2);
	
	setTimeout(function() {
		innovator.animate(
			{'opacity':'1'},
			1000,
			"easeOutCubic"
		);
		Scatter();

		addListeners();

	}, initTime + delayTime * 3);
}

//Mouse Over Animation Listeners
//----------------------------------------------
function addListeners() {

	$('#designer-over').mouseover(function() {
		$('.iam').stop();
		designer.animate(
			{'font-size': zoom_size},
			100,
			"easeOutExpo",
			shrink
		);

		Heart(canvas.width/2, canvas.height * 2/5);
	});
	
	$('#innovator-over').mouseover(function() {
		$('.iam').stop();
		innovator.animate(
			{'font-size': zoom_size},
			100,
			"easeOutExpo",
			shrink
		);
		Scatter();
	});

	$('#engineer-over').mouseover(function() {
		$('.iam').stop();
		engineer.animate(
			{'font-size': zoom_size},
			100,
			"easeOutExpo",
			shrink
		);

		Circle(canvas.width/2, canvas.height/2);
	});
}



function shrink() {
	$('.iam').animate({'font-size': original_size},
		400,
		"easeOutExpo");
}

animateIntro();