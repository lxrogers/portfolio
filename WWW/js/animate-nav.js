var workSection = $('#work_section');
var heroSection = $('.hero')

var workButton = $('#work');
var homeButton = $('#home');
var aboutButton = $('#about');

homeButton.css({'border-bottom' : '2px solid white'})

workButton.hover(function(event) {highlight(event.currentTarget);},
									function(event) {unhighlightAll();});

homeButton.hover(function(event) {highlight(event.currentTarget);	},
									function(event) {	unhighlightAll();	});

aboutButton.hover(function(event) {highlight(event.currentTarget);},
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
		&& homeButton.css('color') == 'rgb(128, 128, 128)' 
		&& aboutButton.css('color') == 'rgb(128, 128, 128)') {
			$('.nav-item').css('color', 'white');
	}
}

/* SLIDING ANIMATIONS
-------------------------------------------------------------------------------*/

var navX = 0;
var workSectionX = -100;
var heroSectionX = 0;
var navMouseDownBooleanFlag = false;
var stickThreshold = 30;
var currPage = "HOME";

//assumes full width divs
function getLeftPercentage(obj) {
	x_px = parseFloat(obj.css('left'));
	x_pct = x_px / window.innerWidth;
	return x_pct * 100;
}

function navMouseDown(e) {
	navX = e.pageX;
	navMouseDownBooleanFlag = true;

	workSection.stop();
	heroSection.stop();

	workSectionX = getLeftPercentage(workSection);
	heroSectionX = getLeftPercentage(heroSection);
}

function navMouseMove(e) {
	if (mouseDown) {
		var currX = e.pageX;
		var dx = (navX - currX) / window.innerWidth * 100;
		navX = currX;

		workSectionX -= dx;
		heroSectionX -= dx;

		workSection.css('left' , workSectionX + '%');
		heroSection.css('left', heroSectionX + '%');
	}
}

//helper functions, use NavToXXX
function goToWorks() {
	$('.section').stop();
	workSection.animate(
		{'left' : '0%'},
		1000,
		"easeOutCubic");
	heroSection.animate(
		{'left' : '100%'},
		1000,
		"easeOutCubic");

	workSectionX = 0;
	heroSectionX = 100;
	currPage = "WORKS";
}

function goToHome() {
	$('.section').stop();
	workSection.animate(
		{'left' : '-100%'},
		1000,
		"easeOutCubic");
	heroSection.animate(
		{'left' : '0%'},
		1000,
		"easeOutCubic");

	workSectionX = -100;
	heroSectionX = 0;
	currPage = "HOME";
}

function checkStick() {
	if (currPage == "HOME") {
		if (heroSectionX > -30 && heroSectionX < 30) {
			navToHome();
		}
		else if (heroSectionX > 30) {
			navToWorks();
		}
		else if (heroSectionX < -30) {
			//go to about
		}
	}
	else if (currPage == "WORKS") {
		if (heroSectionX > 70) {
			navToWorks();
		}
		else if (heroSectionX < 70) {
			navToHome();
		}
	}
	else if (currPage == "ABOUT") {

	}
}

function navToWorks() {
	$('.nav-item').css({'border-bottom' : 'none'});
	workButton.css({'border-bottom' : '2px solid white'});
	goToWorks();
}

function navToHome() {
	$('.nav-item').css({'border-bottom' : 'none'});
	homeButton.css({'border-bottom' : '2px solid white'});
	goToHome();	
}

function navMouseUp(e) {
	navMouseDownBooleanFlag = false;
	checkStick();
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

workButton.click(navToWorks);
homeButton.click(navToHome);

