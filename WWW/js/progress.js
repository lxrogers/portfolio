var n = 0
$images = $('#images-to-load').children('img')
var total = $images.length

$images.each(function() {
	$(this).load(function() {
		n++;
		percent = n * 100 / total;
		offset = 50 - (percent / 2)
		$('#load-bar').stop()
		$('#load-bar').animate(
			{'width' : percent +"%",
			'left' : offset + "%"}, 1000)
	})
})


$(window).load(function() {
	console.log('done loading')
	$('html').css('overflow', 'scroll')

	$('#loader').animate({'opacity' : '0'}, 500)
	$('#everything').delay(1000).animate(
		{"opacity": 1},
		750)
	window.setTimeout(animateIntro, 1200)
})