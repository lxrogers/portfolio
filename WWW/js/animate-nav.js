var workButton = $('#work');
var homeButton = $('#home');
var aboutButton = $('#about');


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


