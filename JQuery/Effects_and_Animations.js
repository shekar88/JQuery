// fade and slide effects
// $('body').css('backgroundColor','red');

$(document).ready(function() {
	// Fade Out
	$('#btnFadeOut').click(function() {
		// $('#box').fadeOut('slow');
		// $('#box').fadeOut('fast');
		// $('#box').fadeOut(3000);
		$('#box').fadeOut(3000, function() {
			$('#btnFadeOut').text('Its Gone');
		});
	});

	//Fade In
	$('#btnFadeIn').on('click', function() {
		// $('#box').fadeIn('slow');
		// $('#box').fadeIn('fast');
		// $('#box').fadeIn(3000);
		$('#box').fadeIn(3000, function() {
			$('#btnFadeOut').text('Fade Out');
		});
	});

	//Fade Toggle
	$('#btnFadeTog').on('click', function() {
		$('#box').fadeToggle(1000);
	})

	//Slide Up
	$('#btnSlideUp').on('click', function() {
		$('#slideBox').slideUp(2000);
	});

	//Slide Down
	$('#btnSlideDown').on('click', function() {
		$('#slideBox').slideDown(2000);
	});

	//Slide Toggle
	$('#btnSlideTog').on('click', function() {
		$('#slideBox').slideToggle(2000);
	});

	//Stop Sliding
	$('#btnStop').on('click', function() {
		$('#slideBox').stop();
	});

	//Move Right
	$('#btnMoveRight').on('click',function() {
		$('#moveBox').animate({
			left: 500,
			width: '200px',
			height: '200px',
			opacity: '0.5'
		});
	});

	//Move Left
	$('#btnMoveLeft').click(function() {
		$('#moveBox').animate({
			left: 0,
			width: '100px',
			height: '100px',
			opacity: 1
		});
	});

	//Move Around
	$('#btnMoveAround').on('click', function() {
		var box = $('#moveBox');
		box.animate({
			left: 300
		});
		box.animate({
			top: 300
		});
		box.animate({
			left: 0,
			top: 300
		});
		box.animate({
			left: 0,
			top: 0
		});
	});
});