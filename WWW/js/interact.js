var designer = $("#designer");
var engineer = $("#engineer");
var innovator = $("#innovator");


function slide() {

	var zoomTime = 1000;
	var delayTime = 2000;
	var endOpacity = 1;
	var canvasOpacity = 1;
	//alert("slide");
	$("#canvas").delay(500).animate(
		{opacity:canvasOpacity}, 2500);
	
	designer.delay(delayTime).animate(
		{opacity: endOpacity,'margin-top': 0},
		zoomTime,
		"easeOutExpo");
	
	engineer.delay(delayTime*1.1).animate(
		{opacity: endOpacity, 'margin-top': 0},
		zoomTime,
		"easeOutExpo");
	
	innovator.delay(delayTime*1.2).animate(
		{opacity: endOpacity, 'margin-top': 0},
		zoomTime,
		"easeOutExpo");

}

function shrink() {
	$('.iam').stop().animate({'font-size':'5em'},
		400,
		"easeOutExpo");
}

$(window).load(function(){
	setTimeout(slide,1000);
});

designer.mouseenter(function(){
	$(this).stop().animate(
		{'font-size': '5.3em'},
		100,
		"easeOutExpo",
		shrink
	);

	Heart(canvas.width/2, canvas.height * 2/5);
});

engineer.mouseenter(function() {
	
	$(this).stop().animate(
		{'font-size': '5.3em'},
		100,
		"easeOutExpo",
		shrink
	);

	Circle(canvas.width/2, canvas.height/2);
});

innovator.mouseenter(function() {
	$(this).stop().animate(
		{'font-size': '5.3em'},
		100,
		"easeOutExpo",
		shrink
	);
	MouseDown();
});