(function($){
	'use strict';

/* --------------------------------------------------
	Initialization
-------------------------------------------------- */

    // Initialize all functions when the document is ready.
	$(document).ready(function(){

		initNavbar();
		initScroller();
		initCountCirc();
		initCountCircMin();
		initCountNbr();
		initCountMin();
		initSliders();
		initGallery();
		initAnimation();
		initVideoBg();
		initKenburns();
		initCountdown();

		if ( document.getElementById('shop-slider-range') ) {
			initRangeSlider();
		}

		// Parallax disabled for mobile screens
		if ($(window).width() >= 1260) {
			initParallax();

			$(window).stellar({
				hideDistantElements: false
			});
		}

	});

	// Initialize functions after elements are loaded.
	$(window).load(function() {

		// Preloader
		$('.preloader img').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(350).fadeOut('slow', function() {

		});

		initPortfolio();
		initBlogMasonry();

	});


/* --------------------------------------------------
	Navigation | Navbar
-------------------------------------------------- */
	
	function initNavbar(){

		// Sticky Nav & Transparent Background
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > 20) {
				$('header').removeClass('navbar-trans', 300);
				$('header').removeClass('navbar-trans-dark');
				$('header').addClass('navbar-small', 300);
			}
			else {
				$('nav:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
					$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('nav:not(.scrolled)').removeClass('navbar-trans navbar-small navbar-trans-dark');
		});


		// Nav on mobile screens
		$(window).resize(function() {
	        if ($(window).width() <= 1259) {
				$('header').addClass('mobile-nav');		        
		    } else {
		    	$('header').removeClass('mobile-nav');
		    }

    		if ($('header').hasClass('mobile-nav')) {
    			$('header').removeClass('navbar-trans');
    			$('header').removeClass('navbar-trans-dark');
    		} else {
    			if ($(window).width() >= 1259 && $(window).top) {
    				$('header').addClass('navbar-trans');
    			}
    		}

    		// Remove dropdown open on hover for small screens
    		if ($('header').hasClass('mobile-nav')) {

    			$('.dropdown-toggle').on('mouseover', function(e){    
    			        e.preventDefault();

    			        $('.dropdown').removeClass('open');

    			    e.stopPropagation();
    			});
    		}

    		// Close mobile menu when clicked link
    		// var isNotDropdown = $('nav:not(.mobile-nav)');

    		if (!$('.header a').hasClass('dropdown-toggle')) {

    			$('.header a').on('click', function(){ 
			        if($('.navbar-toggle').css('display') !='none'){
			            $(".navbar-toggle").trigger( "click" );
			        }
			    });

    		}

	    }).resize();

		// Bugfix for iOS not scrolling on open menu
	    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });


	} // initNavbar



/* --------------------------------------------------
	Scroll Nav
-------------------------------------------------- */

	function initScroller () {

		$('#header').localScroll({
			easing: 'easeInOutExpo'
		});

		$('#page-top').localScroll({
			easing: 'easeInOutExpo'
		});	
	} // initScroller


/* --------------------------------------------------
	Parallax
-------------------------------------------------- */

	function initParallax () {

		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

		if (!isSafari) {
			$(".main-op").parallax("50%", 0.2);
			$(".number-counters").parallax("50%", 0.2);
			$(".cirlce-counters").parallax("50%", 0.3);
			$(".client-list-parallax").parallax("50%", 0.4);
			$(".ft-slider-parallax").parallax("50%", 0.4);
			$(".testimonials-parallaxx").parallax("50%", 0.4);
			$(".twitter-slider").parallax("50%", 0.4);
			$(".login-2").parallax("50%", 0.2);
		}		
	}


/* --------------------------------------------------
	Counters Circles
-------------------------------------------------- */

	function initCountCirc() {
		
		var hasCircles = $('#skillsCircles').hasClass('circles-counters');

		if (hasCircles) {

			var waypoint = new Waypoint({
			  element: document.getElementById('skillsCircles'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					
					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
					    barColor: '#f8f8f8',
					    scaleColor: false,
					    easing: 'easeOutBack',
					    animate: {
					    	duration: 1600,
					    	enabled: true 
					    }
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc



	function initCountCircMin() {
		
		var hasCircles = $('#skillsCirclesMin').hasClass('circles-counters-dark-bg');

		if (hasCircles) {

			var waypoint = new Waypoint({
			  element: document.getElementById('skillsCirclesMin'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					
					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
					    barColor: '#f8f8f8',
					    scaleColor: false,
					    easing: 'easeOutBack',
					    animate: {
					    	duration: 1600,
					    	enabled: true 
					    }
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc




/* --------------------------------------------------
	Number Counters
-------------------------------------------------- */

	function initCountNbr () {

		var hasCounters = $('#counters').hasClass('count-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters'),
			  handler: function() {

			    	var options = {
						useEasing : true,
						useGrouping : true, 
						separator : ','
					};
					// Counter 1
					var counter1 = new CountUp('count-1', 0, 159, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-2', 0, 4,997,766, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-3', 0, 46930, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-4', 0, 102890, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}
		

	} // initCountNbr



	function initCountMin () {

		var hasCounters = $('#counters-min').hasClass('nbr-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters-min'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					// Counter 1
					var counter1 = new CountUp('count-min-1', 0, 675, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-min-2', 0, 1457, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-min-3', 0, 471, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-min-4', 0, 753, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}
		

	} // initCountMin



/* --------------------------------------------------
	Sliders
-------------------------------------------------- */
	
	function initSliders() {

		// Features Slider
		$('.ft-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="info-slider-nav slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="info-slider-nav slick-next"><i class="fa fa-long-arrow-right"></i></button>',
			responsive: [
			    {
			      breakpoint: 999,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 770,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

		// Testimonials Sliders
		$('.t-slider').slick({
			autoplay: false,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="t-slider-nav slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="t-slider-nav slick-next"><span class="linea-arrows-slim-right"></span></button>',
		});

		// Brands/Clients Slider
		$('.clients-slider').slick({
			autoplay: true,
			autoplaySpeed: 1000,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
			    {
			      breakpoint: 999,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 770,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 599,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});

		// Centered Gallery
		$('.centered-gallery').slick({
			centerMode: true,
			  centerPadding: '60px',
			  slidesToShow: 3,
			  responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 1
			      }
			    }
			  ]
		});

		// Full Screen Hero Slider
		$('.fs-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			useCSS: true,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Full Width Hero Slider
		$('.fw-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Text Slider
		$('.text-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

	} // initSliders


/* --------------------------------------------------
	Light Gallery
-------------------------------------------------- */

	function initGallery () {

		// Image Lightbox
		var hasPopup = $('a').hasClass('open-gallery');

		if (hasPopup) {

			$('.open-gallery').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				  }
			});
			
		}

		// Footer Gallery Lightbox
		var hasFtPopup = $('a').hasClass('gallery-widget-lightbox');

		if (hasPopup) {

			$('.gallery-widget-lightbox').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				  }
			});

		}

	} // initGallery

/* --------------------------------------------------
	Blog Masonry Layout
-------------------------------------------------- */

	function initBlogMasonry () {

		var $container = $('.blog-container');
			// init
			$container.isotope({
				// options
				itemSelector: '.blog-selector',
				percentPosition: true
			});
	}

/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		
		new WOW().init();

	}


/* --------------------------------------------------
	Ken Burns Slider
-------------------------------------------------- */
	function initKenburns () {
		
		var hasKenburns = $('.kenburn-hero')[0];

		if (hasKenburns) {
			var w_height = $(window).height();
			var w_width = $(window).width();

			$('.kenburns').attr('width', w_width);
			$('.kenburns').attr('height', w_height);
			$('.kenburns').kenburns({
				images: ['assets/images/hero/kb-slide-1.jpg',
						'assets/images/hero/kb-slide-2.jpg',
						'assets/images/hero/kb-slide-3.jpg'
						],
				frames_per_second: 30,
				display_time: 5000,
				fade_time: 1000,
				zoom: 1.1,
				background_color:'#000000'
			});
		}

	} // initKenburns

/* --------------------------------------------------
	Shop Price Filter - (range slider)
-------------------------------------------------- */

})(jQuery);
