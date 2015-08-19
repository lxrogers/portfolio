var PARALLAX_AMOUNT = 300;

//LIST OF ELEMENTS CONTAINING A PARALLAX CHILD
var parallaxElements = ['.about', '.resume','.contact'];

//FOR WORKS PARALLAX SEE WORKS.JS, FOR PARTICLE PARALLAX SEE PARTICLES.JS
if (PLATFORM !== "mobile") {
	$(window).scroll(parallax);	
}


function parallax(e) {
	fadeName();
	fadeHint();

	for (var i = 0; i < parallaxElements.length; i++) {
		applyParallax(parallaxElements[i]);
	}
}


//specific parallax functions
function fadeName() {
	var splashOffset = getOffsetPercentage($('.splash'));
	var newOffset = (splashOffset + 1) * 3 - 2;
	
	if (splashOffset > -1) {
		$('#name').css('opacity', newOffset);
		$('#nav').css('opacity', newOffset);
	}
}

function fadeHint() {
	var hint = $('#hint');
	var offset = getOffsetPercentage(hint);
	
	if (offset < 1 && offset > -.2) {
		hint.css('opacity', (offset));
	}
}

function applyParallax(parentTag) {
	var parent = $(parentTag);
	var offset = getOffsetPercentage(parent);
	
	var opacity = 1 - offset;
	
	if (offset < 1.2) {
		var child = $(parentTag + ' .parallax');
		child.css('margin-top', offset * PARALLAX_AMOUNT);
		child.css('opacity', opacity);

	}
}

function getOffsetPercentage(e) {
	var eTop = e.offset().top;
	var offset = eTop - $(window).scrollTop();
	return offset / $(window).height();
}
if (PLATFORM !== "mobile") {
	parallax();
}

$(document).ready(
	function() {
		if (PLATFORM == "windows") {
			$("html").niceScroll({
    			mousescrollstep: 50
		    });
		}
	}
);
