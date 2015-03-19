var workButton = $('#work');
var aboutButton = $('#about');
var contactButton = $('#contact');
var initSelected = false;

workButton.hover(function(event) {highlight(event.target);},
									function(event) {unhighlightAll();});

aboutButton.hover(function(event) {highlight(event.target);	},
									function(event) {	unhighlightAll();	});

contactButton.hover(function(event) {highlight(event.target);},
									function(event) {unhighlightAll();});

function highlight(target) {
	$('.nav-item').css('color', 'grey');
	$('#'+target.id).css('color', 'white');
}

function unhighlightAll() {
	$('.nav-item').css('color', 'grey');
	setTimeout(highlightAll, 1000);
}

function highlightAll() {
	console.log(workButton.css('color'));
	if (workButton.css('color') == 'rgb(128, 128, 128)' 
		&& aboutButton.css('color') == 'rgb(128, 128, 128)' 
		&& contactButton.css('color') == 'rgb(128, 128, 128)') {
			$('.nav-item').css('color', 'white');
	}
}