var PARALLAX_AMOUNT = 200;

//LIST OF ELEMENTS CONTAINING A PARALLAX CHILD
var parallaxElements = ['.about'];

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
	var name = $('#name');
	var offset = getOffsetPercentage(name);

	if (offset < 1 && offset > -.2) {
		name.css('opacity', (offset * 3));
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

	if (offset < 1.2 && offset > -.2) {
		var child = $(parentTag + ' .parallax');
		child.css('margin-top', offset * PARALLAX_AMOUNT);
	}
}

function parallaxAbout() {
	var about = $('.about');
	var offset = getOffsetPercentage(about);


	if (offset < 1.2 && offset > -.2) {
		$('.about .parallax').css('margin-top', offset * PARALLAX_AMOUNT);

	}
}

function getOffsetPercentage(e) {
	var eTop = e.offset().top;
	var offset = eTop - $(window).scrollTop();
	return offset / window.screen.height;
}

parallax();