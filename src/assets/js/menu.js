(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 100)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
     if ($("#mainNav").length) {  
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $(".navbar").removeClass("d-none");
    })

    $('.region-id.sp').click(function() {
      $('.region-id.sp').addClass('active');     
      $('.region-id.rj').removeClass('active'); 
      $('.region-id.rs').removeClass('active'); 
      $('.region-id.ouv').removeClass('active');       

      $('.region-unit.sp').addClass('active');      
      $('.region-unit.rj').removeClass('active');
      $('.region-unit.rs').removeClass('active');
      $('.region-unit.ouv').removeClass('active');
      
    });

    $('.region-id.rj').click(function() {
      $('.region-id.rj').addClass('active');   
      $('.region-id.sp').removeClass('active'); 
      $('.region-id.rs').removeClass('active'); 
      $('.region-id.ouv').removeClass('active'); 
      
      $('.region-unit.rj').addClass('active');      
      $('.region-unit.sp').removeClass('active');
      $('.region-unit.rs').removeClass('active');
      $('.region-unit.ouv').removeClass('active');
      
    });

    $('.region-id.rs').click(function() {
      $('.region-id.rs').addClass('active');     
      $('.region-id.sp').removeClass('active'); 
      $('.region-id.rj').removeClass('active'); 
      $('.region-id.ouv').removeClass('active');       

      $('.region-unit.rs').addClass('active');      
      $('.region-unit.sp').removeClass('active');
      $('.region-unit.rj').removeClass('active');
      $('.region-unit.ouv').removeClass('active');
    });

    $('.region-id.ouv').click(function() {
      $('.region-id.ouv').addClass('active');     
      $('.region-id.sp').removeClass('active'); 
      $('.region-id.rj').removeClass('active'); 
      $('.region-id.rs').removeClass('active');       

      $('.region-unit.ouv').addClass('active');      
      $('.region-unit.sp').removeClass('active');
      $('.region-unit.rj').removeClass('active');
      $('.region-unit.rs').removeClass('active');
    });

    $('.btn-img.anl').click(function() {
      $('.btn-img.anl').addClass('active');     
      $('.btn-img.mkt').removeClass('active'); 
      $('.btn-img.mult').removeClass('active'); 

      $('.text-img-anl').show();     
      $('.text-img-mult').hide();       
      $('.text-img-mkt').hide(); 

      $('.banner-content').removeClass('content-mult'); 
      $('.banner-content').removeClass('content-mkt'); 
      $('.banner-content').addClass('content-anl');       
      
    });
    $('.btn-img.mult').click(function() {
      $('.btn-img.mult').addClass('active');     
      $('.btn-img.anl').removeClass('active'); 
      $('.btn-img.mkt').removeClass('active');

      $('.text-img-mult').show();     
      $('.text-img-anl').hide();       
      $('.text-img-mkt').hide();       

      $('.banner-content').removeClass('content-anl'); 
      $('.banner-content').removeClass('content-mkt'); 
      $('.banner-content').addClass('content-mult');   
    });
    $('.btn-img.mkt').click(function() {
      $('.btn-img.mkt').addClass('active');     
      $('.btn-img.mult').removeClass('active'); 
      $('.btn-img.anl').removeClass('active');
      
      $('.text-img-mkt').show();     
      $('.text-img-anl').hide();       
      $('.text-img-mult').hide(); 

      $('.banner-content').removeClass('content-mult'); 
      $('.banner-content').removeClass('content-anl'); 
      $('.banner-content').addClass('content-mkt');   
    });
    $('.up').click(function() {
      window.scrollTo(0, 0);  
    });    
  
  })(jQuery); // End of use strict
  