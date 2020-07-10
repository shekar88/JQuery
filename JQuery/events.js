$(document).ready(function() {

	$('#btn1').css('backgroundColor','cyan');
	// $('#btn1').css('border','none');
	$(':button').css('padding','10px 30px');

	/*
	$('#btn1').click(function() {
		alert('button 1 is clicked');
	});
	*/
	//or
	/*
	$('#btn1').on('click', function() {
		alert('Button clicked from on function');
	});
	*/

	//Hidding Para1 using btn1 click
	/*
	$('#btn1').on('click',function() {
		//$('.para1').hide();
		//toggle 
		$('.para1').toggle();
	});

	//Showing Para1 using btn2 click
	$('#btn2').on('click',function() {
		$('.para1').show();
	});
	*/

// Toggle button my double click
	// $('#btn1').on('dblclick', function() {
	// 	$('.para1').toggle();
	// });
	//OR
	$('#btn1').dblclick(function() {
		$('.para1').toggle();
	});

	//hover toggle
	$('#btn3').on('mouseenter', function() {
		$('.para2').toggle();
	});

	$('#btn3').on('mouseleave', function() {
		$('.para2').toggle();
	});

	//OR 

	// $('#btn3').hover(function() {
	// 	$('.para2').toggle();
	// });

	//Mouse move
	$('#btn4').on('mousemove', function() {
		$('.para3').toggle();
	});

	//Mouse Down
	$('#btn5').on('mousedown', function() {
		$('.para4').toggle();
	}); 
	//Mouse Up
	$('#btn5').on('mouseup', function() {
		$('.para4').toggle();
	});

	$('#btn6').click(function(e) {
		// console.log(e);
		//by id
		// alert(e.currentTarget.id);
		//alert(e.currentTarget.innerHTML);
		// alert(e.currentTarget.outerHTML);
		//by class
		alert(e.currentTarget.className);
	});

	//Mouse Move
	$('#btn7').on('mousemove', function(e) {
		console.log(e);
	});

	$(document).on('mousemove', function(e) {
		$('#coordinates').html('Coordinates: Y-'+e.clientY+' X- '+e.clientX);
	})

	//focus
	$('input').focus(function() {
		// $('input#uname').css('backgroundColor','cyan');
		$(this).css('backgroundColor','cyan');
	});
	//blur
	$('input').blur(function() {
		$(this).css('backgroundColor','#fff');
	});

	//keyup
	$('input#uname').keyup(function(e) {
		$('#uname-result').html(e.target.value);
	});

	$('input#uemail').keyup(function(e) {
		$('#email-result').html(e.target.value);
	});

	$('select#gender').keyup(function(e) {
		$('#gender-result').html(e.target.value);
	});

	$('#user-details-form').submit(function(e) {
		e.preventDefault();
		var name = $('input#uname').val();
		console.log(name)
	});

});