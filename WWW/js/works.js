/*
function resizeWorks() {
	var height = $(".work").width() * .7;
	$(".work").each(function() {
		$(this).height(height);
	});	
};
resizeWorks();

$(window).resize(resizeWorks);
*/

var zoomTime = 700;
var delayTime = 100;

function hoverWork() {
	$(".work").stop();
	$(this).find(".bottom").fadeTo(100, .5);

	var h1 = $(this).find(".overlay").find("h1");
	var h2 = $(this).find(".overlay").find("h2");
	h1.stop();
	h2.stop();
	
	h1.delay(delayTime).animate(
		{fontSize: '4em', opacity: 1,},
		zoomTime,
		"easeOutExpo");
	h2.delay(delayTime*2).animate(
		{fontSize: '1.5em', opacity: 1},
		zoomTime,
		"easeOutExpo");
}

function unHoverWork() {
	var h1 = $(this).find(".overlay").find("h1");
	var h2 = $(this).find(".overlay").find("h2");
	h1.stop();
	h2.stop();

	h1.delay(delayTime).animate(
		{fontSize: '3.5em', opacity: 0},
		zoomTime,
		"easeOutExpo");
	h2.animate(
		{fontSize: '1.25em', opacity: 0},
		zoomTime,
		"easeOutExpo");
	
	
	$(this).find(".bottom").delay(delayTime*2).fadeTo(200, 1);
}

function clickWork() {
	$(this).animate(
		{height: '100%'},
		1000,
		"easeOutExpo"
	);
}


$(".work").each(function() {
	$(this).hover(hoverWork, unHoverWork);
});

$('.work').each(function() {
	$(this).click(clickWork);
});



