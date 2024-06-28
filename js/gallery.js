$(document).ready(function () {
	$('.gallery__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,

		mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-caret-left-fill"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="bi bi-caret-right-fill"></i></button>',
				},
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-caret-left-fill"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="bi bi-caret-right-fill"></i></button>',
				},
			},
		],
	})
})
