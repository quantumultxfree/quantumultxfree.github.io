/*
  Theme Name: Fossil | Gas Station & Petrol Pump HTML Template
  Author: Capricorn_Theme
  Creation Date: 07 Feb 2021
  Version: 1.0
*/

/* [Table of Contents]

* 01. Mobile Menu 
  02. Header Search Form 

  03. Owl Carousel
        - Hero Area Slider
        - Testimonial Carousel
		- Client Carousel
  04. Sticky Area
  05. Progress Bar 
  06. Counter Up 
  07. Wow Animation 
  08. Scroll to the Top
  09. Active & Remove Class
  10. Menu Active Color
  11. Preloader 

*/
(function ($) {
	"use strict";

	// Mobile Menu

	$(".navbar-toggler").on("click", function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav li a").on("click", function () {
		$(".sub-nav-toggler").removeClass("active");
	});

	var subMenu = $(".navbar-nav .sub-menu");

	if (subMenu.length) {
		subMenu
			.parent("li")
			.children("a")
			.append(function () {
				return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
			});

		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

		subMenuToggler.on("click", function () {
			$(this).parent().parent().children(".sub-menu").slideToggle();
			return false;
		});
	}

	//Header Search Form
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$("body").removeClass("search-active");
		});
	}

	// Hero Area Slider

	$('.homepage-slides').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		smartSpeed: 2000,
		slideSpeed: 600,
		animateOut: 'fadeOut',
		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 1,
				nav: false,
				dots: false,
			},
			1100: {
				items: 1,
				nav: true,
				dots: false,
			}
		}
	});


	$(".homepage-slides").on("translate.owl.carousel", function () {
		$(".single-slide-item h1").removeClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").removeClass("animated fadeInDown").css("opacity", "1");
	});

	$(".homepage-slides").on("translated.owl.carousel", function () {
		$(".single-slide-item h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").addClass("animated fadeInDown").css("opacity", "1");
	});


	// Testimonial Carousel

	$('.client-carousel').owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 2,
				nav: false
			},

			990: {
				items: 2,
				loop: true,

			},
			1200: {
				items: 3,
				dots: true,
				loop: true,
			}
		}
	});


	// Client Carousel 

	$('.logo-carousel').owlCarousel({
		items: 5,
		margin: 30,
		dots: false,
		nav: false,
		loop: true,
		autoplay: false,
		responsive: {
			0: {
				items: 2,
				nav: false,
				dots: false,
			},
			600: {
				items: 2,
				nav: false,
				dots: false,
			},
			768: {
				items: 4,
				nav: false,
				dots: false,
			},
			1100: {
				items: 5,
				nav: false,
				dots: true,
			}
		}
	})

	//jQuery Sticky Area 
	$('.sticky-area').sticky({
		topSpacing: 0,
	});

	//Progress Bar JS

	$("#bar1").barfiller({
		barColor: "#FFD857",
		duration: 5000,
	});

	$("#bar2").barfiller({
		barColor: "#FFD857",
		duration: 6000,
	});

	$("#bar3").barfiller({
		barColor: "#FFD857",
		duration: 7000,
	});

	$("#bar4").barfiller({
		barColor: "#FFD857",
		duration: 5000,
	});

	$("#bar5").barfiller({
		barColor: "#FFD857",
		duration: 6000,
	});

	$("#bar6").barfiller({
		barColor: "#FFD857",
		duration: 7000,
	});

	//Counter Up

	$(".counter-number span").counterUp({
		delay: 10,
		time: 1000,

	});


	//jQuery Animation  
	new WOW().init(

	);

	// SCROLLTO THE TOP

	// Show or hide the sticky footer button
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 6000) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});


	// Animate the scroll to top
	$('.go-top').on("click", function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	});

	// Active & Remove Class 

	//	$(".single-serv-item").on("mouseover", function () {
	//		$(".single-serv-item").removeClass("active");
	//		$(this).addClass("active");
	//	});

	$(".single-price-item").on("mouseover", function () {
		$(".single-price-item").removeClass("active");
		$(this).addClass("active");
	});

	// Menu Active Color 

	$(".main-menu .navbar-nav .nav-link").on("mouseover", function () {
		$(".main-menu .navbar-nav .nav-link").removeClass("active");
		$(this).addClass("active");
	});

	// Preloader
	setTimeout(function () {
		$("#loader").fadeOut(600);
	}, 200);

	jQuery(window).on("load", function () {
		jQuery(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);
	});


}(jQuery));
