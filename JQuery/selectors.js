// $('h1').hide();
// $('h1#heading1').hide();
// $('h1.heading2').hide();
// $('.heading2').hide();


$('p span').css('color', 'red');

$('ul#list li').css('fontWeight','bold');

$('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color', 'green');

$('ul#list li:even').css('background-color','cyan');
$('ul#list li:odd').css('background-color','#cccccc');

//every 3rd multiple is none
$('ul#list li:nth-child(3n)').css('list-style','none');

// all buttons are hide, which have type='button'
// $(':button').hide();

// all submit buttons are hide, which have type='submit'
// $(':submit').hide();

// all text box are hide, which have type='text'
$(':text').hide();

//using attributes
$('[href]').css('color','orange');

//using attribute values
$('[href="http://yahoo.com"]').css('color','green');

$('*').css('font-weight','bold');
