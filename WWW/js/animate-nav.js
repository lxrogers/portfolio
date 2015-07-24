var workSection = $('#work_section');
var heroSection = $('.hero')
var aboutSection = $('#about_section');

var sections = [workSection, heroSection, aboutSection];
//page ids. These equal the page location relative to heroSectionX %;
var ABOUT_PAGE = 0;
var HOME_PAGE = 100;
var WORKS_PAGE = 200;

var workButton = $('#work');
var homeButton = $('#home');
var aboutButton = $('#about');

homeButton.css({'border-bottom' : '2px solid white'})

workButton.hover(function(event) {highlight(event.currentTarget);},
									function(event) {unhighlightAll();});

homeButton.hover(function(event) {highlight(event.currentTarget);	},
									function(event) {unhighlightAll();});

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
var aboutSectionX = 100;

var navMouseDownBooleanFlag = false;
var stickThreshold = 30;
var currPage = HOME_PAGE;

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
	aboutSection.stop();

	workSectionX = getLeftPercentage(workSection);
	heroSectionX = getLeftPercentage(heroSection);
	aboutSectionX = getLeftPercentage(aboutSection);
}

function navMouseMove(e) {
	if (mouseDown) {
		var currX = e.pageX;
		var dx = (navX - currX) / window.innerWidth * 100;
		navX = currX;

		workSectionX -= dx;
		heroSectionX -= dx;
		aboutSectionX -= dx;

		workSection.css('left' , workSectionX + '%');
		heroSection.css('left', heroSectionX + '%');
		aboutSection.css('left', aboutSectionX + '%');
	}
}

function goTo(page_id) {
	$('.section').stop();
	for (var i = -2; i < sections.length - 2; i++) {

		animationX = page_id + (i * 100) + '%';
		sections[i + 2].animate(
			{'left' : animationX},
			1000,
			"easeOutCubic");
	}
	currPage = page_id;
}

function checkStick() {
	if (currPage == HOME_PAGE) {
		if (heroSectionX > -30 && heroSectionX < 30) {
			navTo(HOME_PAGE);
		}
		else if (heroSectionX > 30) {
			navTo(WORKS_PAGE);
		}
		else if (heroSectionX < -30) {
			navTo(ABOUT_PAGE);
		}
	}
	else if (currPage == WORKS_PAGE) {
		if (heroSectionX > 70) {
			navTo(WORKS_PAGE);
		}
		else if (heroSectionX < 70) {
			navTo(HOME_PAGE);
		}
	}
	else if (currPage == ABOUT_PAGE) {
		console.log(heroSectionX);
		if (heroSectionX > -70) {
			navTo(HOME_PAGE);
		}
		else if (heroSectionX < -70) {
			navTo(ABOUT_PAGE);
		}
	}
}
function navTo(page_id) {
	$('.nav-item').css({'border-bottom' : 'none'});
	if (page_id == WORKS_PAGE) {
		workButton.css({'border-bottom' : '2px solid white'});
	}
	else if (page_id == HOME_PAGE) {
		homeButton.css({'border-bottom' : '2px solid white'});
	}
	else if (page_id == ABOUT_PAGE) {
		aboutButton.css({'border-bottom' : '2px solid white'});	
	}
	goTo(page_id);
}

function navMouseUp(e) {
	navMouseDownBooleanFlag = false;
	checkStick();
}

function navTouchStart(e) {
	navMouseDown(convertTouch(e));
}

function navTouchMove(e) {
	navMouseMove(convertTouch(e));
}

function navTouchEnd(e) {
	navMouseUp(convertTouch(e));

}

window.addEventListener('mousemove', navMouseMove, false);
window.addEventListener('mousedown', navMouseDown, false);
window.addEventListener('mouseup', navMouseUp, false);

window.addEventListener("touchstart", navTouchStart, false);
window.addEventListener("touchmove", navTouchMove, false);
window.addEventListener("touchend", navTouchEnd, false);

workButton.click(function() {navTo(WORKS_PAGE);});
homeButton.click(function() {navTo(HOME_PAGE);});
aboutButton.click(function() {navTo(ABOUT_PAGE);});

