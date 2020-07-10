$(document).ready(function() {
	//Single CSS property
	$('p.para1').css('color','red');
	//M.myUltiple CSS properties
	$('p.para1').css({color:'green',fontWeight: 'bold',backgroundColor:'cyan'});

	$('p.para2').addClass('myClas');
	$('p.para2').removeClass('myClas');

	//toggle button
	$('#btn1').on('click', function() {
		$('p.para2').toggleClass('myClas');
	});

	//Set from script
	$('#myDiv').text('Set Value from Script');
	$('#myDiv').html('Set New Value from Script');
	$('#myDiv').html('<h1>Set h1 Value from Script</h1>');

	//Get from script
	// alert($('#myDiv').text());

	//Add list item at End Position from script
	$('.myUl').append('<li>Append List item 1</li>');
	$('.myUl').append('<li>Append List item 2</li>');
	$('.myUl').append('<li>Append List item 3</li>');

	//Add list time at Start Position from script
	$('.myUl').prepend('<li>Prepend List item 1</li>');
	$('.myUl').prepend('<li>Prepend List item 2</li>');
	$('.myUl').prepend('<li>Prepend List item 3</li>');

	$('.para3').appendTo('.para4');

	$('.para5').prependTo('.para6');

	//Before and After
	$('.myUl').before('<h4 style="color: red;font-weight: bold;">Before From Script</h4>');
	// $('.myUl').before('<h4>Before From Script</h4>').css({color:'red',fontWeight:'bold'});	//not working

	$('.my.myUl').after('<h4>After From Script</h4>');

	//hidding in the code
	// $('.myUl').empty();
	//removing from DOM
	// $('.myUl').detach();

	//Adding Attribute from script
	$('a').attr('target','_black');

	// alert($('a').attr('href'));

	//Removing attribute from script
	$('a').removeAttr('target');

	//wraping elements from script
	// $('p').wrap('<h1>');
	//wraping all elements from script
	// $('p').wrapAll('<h1>');

	//Adding new list elements from script
	$('#newItem').keyup(function(e) {
		var code = e.which;
		// alert(code);
		if(code == 13) {
			e.preventDefault();
			$('ul.myList').append('<li>'+e.target.value+'</li>');
		}
	});

	// Print array on browser like list
	var myArray = ['Chandu','Kavi','Malli'];

	$.each(myArray, function(index,value) {
		$('#users').append('<li>' +value+ '</li>')
	});

	var newArray = $('ul.myList li').toArray();
	// console.log(newArray);
	$.each(newArray, function(index,value) {
		console.log(value.innerHTML);
	});

});