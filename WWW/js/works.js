var HEADER_CLASS = "h2";
var SUBTITLE_CLASS = "h6";

var zoomTime = 700;
var delayTime = 100;
var SUBTITLE_DELAY = 150;

var HEADER_FONT_SIZE_END = '2.5em';
var SUBTITLE_FONT_SIZE_END = '1em';

var HEADER_FONT_SIZE_BEGIN = '3em';
var SUBTITLE_FONT_SIZE_BEGIN = '1.3em';

var HEADER_BASE_BOTTOM = 70;
var SUBTITLE_BASE_TOP = 30;

var WORKS_PARALLAX_AMOUNT = 75;
var scroll_counter = 0;

function hightlightWork(work) {
	$(".work").stop();
	work.find(".bottom").fadeTo(100, .5);

	var header = work.find(".overlay").find(HEADER_CLASS);
	var subtitle = work.find(".overlay").find(SUBTITLE_CLASS);
	header.stop();
	subtitle.stop();
	
	header.delay(delayTime).animate(
		{fontSize: HEADER_FONT_SIZE_END, opacity: 1,},
		zoomTime,
		"easeOutExpo");
	subtitle.delay(delayTime + SUBTITLE_DELAY).animate(
		{fontSize: SUBTITLE_FONT_SIZE_END, opacity: 1},
		zoomTime,
		"easeOutExpo");

	work.addClass("highlighted");
}

function unHighlightWork(work) {
	var header = work.find(".overlay").find(HEADER_CLASS);
	var subtitle = work.find(".overlay").find(SUBTITLE_CLASS);
	header.stop();
	subtitle.stop();

	header.delay(delayTime).animate(
		{fontSize: HEADER_FONT_SIZE_BEGIN, opacity: 0},
		zoomTime,
		"easeOutExpo");
	subtitle.animate(
		{fontSize: SUBTITLE_FONT_SIZE_BEGIN, opacity: 0},
		zoomTime,
		"easeOutExpo");
	
	
	work.find(".bottom").delay(delayTime*2).fadeTo(200, 1);
	work.removeClass("highlighted");
}

function clickWork() {
	$(this).animate(
		{height: '100%'},
		1000,
		"easeOutExpo"
	);
}

function worksParallax() {
	$(".work").each(function() {
		var offset = getOffsetPercentage($(this));

		var img = $(this).find(".bottom").find("img");
		img.css("margin-top", -50 * offset + "px");

		if (offset <= .5 && offset >= -.2) {
			if (!$(this).hasClass('highlighted')) {
				hightlightWork($(this));
			}

			var header = $(this).find(".overlay").find(HEADER_CLASS);
			var subtitle = $(this).find(".overlay").find(SUBTITLE_CLASS);
			
			header.css('bottom', HEADER_BASE_BOTTOM - WORKS_PARALLAX_AMOUNT * offset + "%");
			subtitle.css('top', SUBTITLE_BASE_TOP + WORKS_PARALLAX_AMOUNT * offset + "%");
		}

		else if ((offset > .5 || offset < -.2) && $(this).hasClass('highlighted')) {
			console.log("unHighlightWork")
			unHighlightWork($(this));
		}
	})
}

$(".work").each(function() {
	//$(this).hover(hoverWork, unHoverWork);
});

$('.work').each(function() {
	$(this).click(clickWork);
});

$(window).scroll(worksParallax);

