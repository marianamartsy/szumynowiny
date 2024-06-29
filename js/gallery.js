$(document).ready(function () {
	$('.gallery__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		prevArrow:
			'<button type="button" class="slick-prev" aria-label="Poprzedni slajd"><i class="bi bi-chevron-left"></i></i></button>',
		nextArrow:
			'<button type="button" class="slick-next" aria-label="Następny slajd"><i class="bi bi-chevron-right"></i></button>',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	})
})
