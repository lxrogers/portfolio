var workSection = $('#work_section');

var workButton = $('#work');
var aboutButton = $('#about');
var contactButton = $('#contact');
var initSelected = false;

workButton.hover(function(event) {highlight(event.currentTarget);},
									function(event) {unhighlightAll();});

aboutButton.hover(function(event) {highlight(event.currentTarget);	},
									function(event) {	unhighlightAll();	});

contactButton.hover(function(event) {highlight(event.currentTarget);},
									function(event) {unhighlightAll();});

function highlight(target) {
	$('.nav-item').stop();
	$('.nav-item').css('color', 'grey');
	$('#'+target.id).css('color', 'white');
}

function unhighlightAll() {
	$('.nav-item').stop();
	$('.nav-item').css('color', 'grey');
	setTimeout(highlightAll, 1000);
}

function highlightAll() {
	$('.nav-item').stop();
	if (workButton.css('color') == 'rgb(128, 128, 128)' 
		&& aboutButton.css('color') == 'rgb(128, 128, 128)' 
		&& contactButton.css('color') == 'rgb(128, 128, 128)') {
			$('.nav-item').css('color', 'white');
	}
}

var navX = 0;
var workSectionX = -100;
var navMouseDownBooleanFlag = false;

function navMouseDown(e) {
	navX = e.pageX;
	console.log("pageX", e.pageX);
	navMouseDownBooleanFlag = true;
}

function navMouseMove(e) {
	if (mouseDown) {
		var currX = e.pageX;
		var dx = (navX - currX) / window.innerWidth * 100;
		navX = currX;

		workSectionX -= dx;
		workSection.css('left' , workSectionX + '%');
	}

}

function navMouseUp(e) {
	navMouseDownBooleanFlag = false;
}

function navTouchStart(e) {

}

function navTouchMove(e) {

}

function navTouchEnd(e) {

}

window.addEventListener('mousemove', navMouseMove, false);
window.addEventListener('mousedown', navMouseDown, false);
window.addEventListener('mouseup', navMouseUp, false);

window.addEventListener("touchstart", navTouchStart, false);
window.addEventListener("touchmove", navTouchMove, false);
window.addEventListener("touchend", navTouchEnd, false);