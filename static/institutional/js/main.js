(function($) {

	"use strict";

	// Hide loading box (if any)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	// Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	// Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="arrow-down" style="border: solid currentColor; border-width: 0 2px 2px 0; display: inline-block; padding: 3px; transform: rotate(45deg); -webkit-transform: rotate(45deg); margin-bottom: 3px;"></span></div>');

		// Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

		// Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	// Mobile Navigation Toggle
	if($('.navbar-toggle').length) {
		$('.navbar-toggle').on('click', function() {
			$('.navbar-collapse').slideToggle(300);
		});
	}

	// Search Panel Toggle
	if($('.search-box-btn').length) {
		$('.search-box-btn').on('click', function(e) {
			e.preventDefault();
			$(this).next('.search-panel').toggle();
		});

		// Close when clicking outside
		$(document).on('click', function(e) {
			if (!$(e.target).closest('.search-box-outer').length) {
				$('.search-panel').hide();
			}
		});
	}

	// Client Testimonial Carousel
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
					dots: false,
					autoplay: true,
					smartSpeed: 300,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync4.trigger('to.owl.carousel', [e.item.index - 1, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin: 0,
					items: 3,
					nav: false,
					dots: false,
					center: true,
					responsive: {
						0: {
							items: 3
						},
						600: {
							items: 3
						},
						1000: {
							items: 3
						}
					}
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

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
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
					items:4
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});
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

	// Custom Hero Slider
	if ($('.custom-slider-container').length) {
		var slides = $('.custom-slide');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide, 8000);

		function nextSlide() {
			goToSlide(currentSlide + 1);
		}

		function prevSlide() {
			goToSlide(currentSlide - 1);
		}

		function goToSlide(n) {
			slides.eq(currentSlide).removeClass('active');
			currentSlide = (n + slides.length) % slides.length;
			slides.eq(currentSlide).addClass('active');
		}

		$('.custom-slider-next').on('click', function() {
			nextSlide();
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, 8000);
		});

		$('.custom-slider-prev').on('click', function() {
			prevSlide();
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, 8000);
		});
	}

	// When window is scrolled, run headerStyle
	$(window).on('scroll', function() {
		headerStyle();
	});

	// When window is loaded, run handlePreloader
	$(window).on('load', function() {
		handlePreloader();
	});

})(window.jQuery);
