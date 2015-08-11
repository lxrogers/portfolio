
//Animate Three Words in
//----------------------------------------
function animateIntro() {
	var delayTime = 1200;
	var initTime = 200;
	
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