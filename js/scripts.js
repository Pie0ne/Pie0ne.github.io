/* scrool to bottom */

  

$(function() {
  $('#section03').on('click', function() {
    $('html, body').animate({ 
    	scrollTop: $('#about').offset().top}, 1000);
  	});
  	
  	/*collapsed menu */ 

    $('#button').click(function() {
        $('#menu').toggle('slow');
    });
    
    /* sliding to section */

    $('#homes').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#home').offset().top}, 1000);
   	});

   	$('#abouts').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#about').offset().top}, 1000);
   	});
   	$('#skillss').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#skils').offset().top}, 1000);
   	});

   	$('#workss').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#works').offset().top}, 1000);
   	});

   	$('#contacts').click(function() {
   		$('html, body').animate({ 
    	scrollTop: $('#contact').offset().top}, 1000);
   	});
});

/*skills rotate badges*/

$(function(){
	var $badges = $(".amg-badge img");
	function rotateBadge(passedBadge, speed) {
  		var rotateSpeed = speed / 180,
      	current = 0;

    function badgeRotation(passedBadge){
      current = (current == 90) ? 271 : current + 1;

      passedBadge.css({
        "-webkit-transform":"rotate3d(0,1,0," + current + "deg)",
        "-moz-transform":"rotate3d(0,1,0," + current + "deg)",
        "transform":"rotate3d(0,1,0," + current + "deg)"
    });

    if (current == 360) {
      clearInterval(rotateInterval);
      passedBadge.removeAttr('style').removeClass('spinning');
      }
  	}
  	var rotateInterval = setInterval(function(){badgeRotation(passedBadge)}, rotateSpeed);
	}

	$badges.mouseenter(function(){
	  if ($(this).hasClass('spinning')) {
	    return false;
	  } 
	  else {
	    rotateBadge($(this), 500);
	    $(this).addClass('spinning');
	  }
	});
});

/* tooltip */


$(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

/* scroll up */


 $(window).scroll(function() {
    if ( $(window).scrollTop() > 300 ) {
        $('a.back-to-top').fadeIn('slow');
      } 
    else {
      $('a.back-to-top').fadeOut('slow');
       }
    });
    $('a.back-to-top').click(function() {
      $('html, body').animate({
      scrollTop: 0}, 700);
      return false;
    });
            

  /* Scroll Reveal */


//skills

ScrollReveal().reveal('.amg-badge-collection-reveal1', {delay: 600 , reset: false, scale: 2.5, mobile: false });
ScrollReveal().reveal('.amg-badge-collection-reveal2', {delay: 600 , reset: false, scale: 2.5, mobile: false} );
ScrollReveal().reveal('.amg-badge-collection-reveal3', {delay: 600 , reset: false, scale: 2.5, mobile: false} );

// works

ScrollReveal().reveal('.works', {delay: 600 , reset: false, mobile: false });

//contact 

ScrollReveal().reveal('.contact', {delay: 600 , reset: false, mobile: false });