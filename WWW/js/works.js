var HEADER_CLASS = "h2";
var SUBTITLE_CLASS = "h6";

var zoomTime = 700;
var delayTime = 100;
var SUBTITLE_DELAY = 100;

var HEADER_FONT_SIZE_END = '2.5em';
var SUBTITLE_FONT_SIZE_END = '1em';

var HEADER_FONT_SIZE_BEGIN = '3em';
var SUBTITLE_FONT_SIZE_BEGIN = '1.15em';

var HEADER_BASE_BOTTOM = 70;
var SUBTITLE_BASE_TOP = 30;

var WORKS_PARALLAX_AMOUNT = 25;
var scroll_counter = 0;

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 500);
});

$("#resume").click(function() {
    $('html, body').animate({
        scrollTop: $(".resume").offset().top
    }, 500);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $(".works").offset().top
    }, 500);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 500);
});

function hoverWork() {
	console.log('hover');
	if ($(this).hasClass("clicked")) return;
	$(this).find(".bottom").fadeTo(100, .5);

	var header = $(this).find(".overlay").find(HEADER_CLASS);
	var subtitle = $(this).find(".overlay").find(SUBTITLE_CLASS);
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

	$(this).addClass("highlighted");
}

function unHoverWork() {
	
	var header = $(this).find(".overlay").find(HEADER_CLASS);
	var subtitle = $(this).find(".overlay").find(SUBTITLE_CLASS);
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
	
	
	$(this).find(".bottom").delay(delayTime*2).fadeTo(200, 1);
	$(this).removeClass("highlighted");
}


function openWork(work) {
	work.animate(
		{"padding-bottom": '70%',
		"margin-top" : "5%",
		"margin-bottom" : "5%"},
		750,
		"easeOutExpo"
	);

	var offset = .1 * $(window).height();
	$('html, body').animate({
	    scrollTop: work.offset().top - offset
		}, 750,
		"easeOutExpo");	

	$(this).queue(unHoverWork);
}

function closeWork(work) {
	work.animate(
		{"padding-bottom": '50%',
		"margin" : "0"},
		750,
		"easeOutExpo"
	);
}

function clickWork() {
	if ($(this).hasClass("clicked")) {
		$(this).toggleClass("clicked");
		closeWork($(this));
	}
	else {
		$(this).toggleClass("clicked");
		openWork($(this));
	}
}




$(".work").each(function() {
	$(this).hover(hoverWork, unHoverWork);
});

$('.work').each(function() {
	$(this).click(clickWork);
});

if (PLATFORM !== "mobile") {
	
}

function resizeWorks() {
	$('.work .bottom').each(function(){
		var w = $(this).width();
		var h = $(this).height();
  		var imgClass = (w/h > 1.303) ? 'wide' : 'tall';
  		var img = $(this).find('img');
  		if (w/h > 1.303) { // WIDE
  			img.removeClass('tall');
  			img.addClass('wide');
  			img.css('margin-left', "0px");
  		}
  		else { //TALL
  			img.removeClass('wide');
  			img.addClass('tall');
  			offset = (img.width() - w) / 2;
  			if (offset > 0) {
  				img.css('margin-left', -1 * offset + "px");
  			}
  			console.log(w, img.width(), "offset", offset)
  		}

 	});
}

$(window).resize(function() {
	resizeWorks();
});

resizeWorks();