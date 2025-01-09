

$(document).ready(function ($) {

	$(".partners-carousel").owlCarousel({
		loop: false,
		margin: 10,
		dots: false,
        stagePadding: 100, 
        // center:true,
		nav: true,
		responsive:{
            0:{
                items:1,
                stagePadding: 0
            },
            600:{
                items:2,
                stagePadding: 0
            },
            1000:{
                items:2
            }
        } 
	});
	$(".profile-testimonial").owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: false,
		items: 1,
		autoplay: true,
		autoplayHoverPause:false,
		autoplayTimeout:3000
	});
	var owl = $(".partners-carousel");
	owl.owlCarousel();
	$(".next-btn").click(function () { 
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
	$(".prev-btn").addClass("disabled");
	$(owl).on("translated.owl.carousel", function (event) {
		if ($(".owl-prev").hasClass("disabled")) {
			$(".prev-btn").addClass("disabled");
		} else {
			$(".prev-btn").removeClass("disabled");
		}
		if ($(".owl-next").hasClass("disabled")) {
			$(".next-btn").addClass("disabled");
		} else {
			$(".next-btn").removeClass("disabled");
		}
	});

	$(".team-box").hover(function(){
			$(this).addClass("low-opacity");
			$(".team-box").css("opacity", "0.3");
		}, 
		function(){
		$(".team-box").css("opacity", "1");
		$(this).removeClass("low-opacity");
	});

	//  ---------Form Style 01---------- 

	$('.form-style-01 .form-control').focus(function(){
		$(this).parent().find(".label-name").addClass('label-active');
	});
	
	$(".form-style-01 .form-control").focusout(function(){
		if ($(this).val() == '') {
			$(this).parent().find(".label-name").removeClass('label-active');
		};
	});

});


AOS.init();