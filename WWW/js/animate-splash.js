
//Animate Three Words in
//----------------------------------------
function animateIntro() {
	var delayTime = 1200;
	var initTime = -500;
	
	setTimeout(function() {
		Heart(canvas.width/2, canvas.height * 2/5);
	}, initTime + delayTime);

	setTimeout(function() {
		Circle(canvas.width/2, canvas.height/2);
	}, initTime + delayTime * 2);
	
	setTimeout(function() {
		Scatter();
	}, initTime + delayTime * 3);
}

animateIntro();

$('#heart').click(function(e) {
	Heart(canvas.width/2, canvas.height * 2/5);
});

$('#circle').click(function(e) {
	Circle(canvas.width/2, canvas.height/2);
});

$('#scatter').click(function(e) {
	Scatter();
});