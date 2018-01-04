/* Scrool to bottom */

$(function() {
  $('#section03').on('click', function() {
    $('html, body').animate({ 
    	scrollTop: $('#about').offset().top}, 1000);
  });

    $('#button').click(function() {
        $('#menu').toggle('slow');
    });

    $('#homes').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#home').offset().top}, 1000);
   	});

   	$('#abouts').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#about').offset().top}, 1000);
   	});
});



