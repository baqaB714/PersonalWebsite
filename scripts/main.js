// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).scrollTop(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    autoplayTimeout:12000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
    }
});
});



document.addEventListener('DOMContentLoaded', function () {

  for (const elm of document.getElementsByClassName('pic_doc')) {

    elm.addEventListener('mouseover', (e) => {
      e.target.classList.remove('scale_min')
    }
    )
  }
  for (const elm of document.getElementsByClassName('pic_doc')) {

    elm.addEventListener('mouseleave', (e) => {
      e.target.classList.add('scale_min')
    }
    )
  }

  for (const elm of document.getElementsByClassName('btn_doc')) {

    elm.addEventListener('click', () => {
      console.log(555);

      document.getElementById('bg_imag').classList.remove('d-none')
    }
    )
  }

  for (const elm of document.getElementsByClassName('btn_close')) {

    elm.addEventListener('click', () => {
      document.getElementById('bg_imag').classList.add('d-none')

      for (const elm of document.getElementsByClassName('nav-link')) {

        elm.classList.remove('active')
      }
    }
    )
  }


})






$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  
