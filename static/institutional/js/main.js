(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var siteHeaderHeight = $('.main-header').height();
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= siteHeaderHeight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="arrow-down" style="border: solid currentColor; border-width: 0 2px 2px 0; display: inline-block; padding: 3px; transform: rotate(45deg); -webkit-transform: rotate(45deg); margin-bottom: 3px;"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Fullscreen Slider With Thumbs
	if ($('.banner-thumbs-carousel .fullscreen-carousel').length && $('.banner-thumbs-carousel .thumbs-carousel').length) {
		
		var $sync1 = $(".banner-thumbs-carousel .fullscreen-carousel"),
			$sync2 = $(".banner-thumbs-carousel .thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync1
				.owlCarousel({
					animateOut: 'fadeOut',
    				animateIn: 'fadeIn',
					mouseDrag: false,
					loop:false,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="arrow-left" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"></span>', '<span class="arrow-right" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></span>' ],
					dots: false,
					autoplay: true,
					smartSpeed: 300,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					loop:false,
					margin:20,
					items: 1,
					nav: true,
					navText: [ '<span class="arrow-left" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"></span>', '<span class="arrow-right" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:2
				        },
				        600:{
				            items:3
				        },
				        800:{
				            items:4
				        },
				        1024:{
				            items:5
				        },
				        1200:{
				            items:6
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}
	
	
	//Main Slider Two Height
	function mainSliderTwoHeight() {
		if($('.banner-thumbs-carousel').length){
			var FullScreenHeight = $(window).height();
			var MainHeaderHeight = $('.main-header').height();
			$('.banner-thumbs-carousel .fullscreen-carousel .slide-item').css('min-height',450);
			$('.banner-thumbs-carousel .fullscreen-carousel .slide-item').css('height',FullScreenHeight-MainHeaderHeight-70);
		}
	}
	
	
	
	//Comming Soon Scrolbar
	if($('.comming-soon').length){
		$('.comming-soon').mCustomScrollbar();
	}
	
	
	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="arrow-left" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"></span>', '<span class="arrow-right" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></span>' ],
					dots: true,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:0,
					items: 1,
					nav: false,
					navText: [ '<span class="arrow-left" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"></span>', '<span class="arrow-right" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><span class="unit">Days</div></div> ' + '<div class="counter-column"><span class="count">%H</span><span class="unit">Hours</div></div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="unit">Mins</div></div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="unit">SECS</div></div>'));
		});
	 });
	}

	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="arrow-left" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"></span>', '<span class="arrow-right" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1400:{
					items:1
				}
			}
		});    		
	}
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	//Sortable Masonary with Filters
	function sortableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	sortableMasonry();
	
	
	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="arrow-left" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(135deg); -webkit-transform: rotate(135deg);"></span>', '<span class="arrow-right" style="border: solid currentColor; border-width: 0 3px 3px 0; display: inline-block; padding: 5px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:5
				},
				1024:{
					items:5
				},
				1400:{
					items:6
				}
			}
		});    		
	}
	
	
	//Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.gallery-item'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();
	
	
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
		sortableMasonry();
		mainSliderTwoHeight();
	});	
	
/* ==========================================================================
   When Screen is Resized, do
   ========================================================================== */
	
	$(window).on('resize', function() {
		mainSliderTwoHeight();
	});
	

})(window.jQuery);