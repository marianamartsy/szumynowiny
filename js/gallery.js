$(document).ready(function () {
	$('.gallery__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 
					3,
					slidesToScroll: 1,
				},
			},
		],
	})
})
