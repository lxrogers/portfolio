var PARALLAX_AMOUNT = 200;

//LIST OF ELEMENTS CONTAINING A PARALLAX CHILD
var parallaxElements = ['.about', '.resume', '.contact'];

$(window).scroll(parallax);

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
	var newOffset = (splashOffset + 1) * 3 - 2.1;

	if (newOffset < 1) {
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

	if (offset < 1.2) {
		var child = $(parentTag + ' .parallax');
		child.css('margin-top', offset * PARALLAX_AMOUNT);
	}
}

function getOffsetPercentage(e) {
	var eTop = e.offset().top;
	var offset = eTop - $(window).scrollTop();
	return offset / $(window).height();
}

parallax();