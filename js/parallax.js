document.addEventListener('scroll', function () {
	const scrollPosition = window.scrollY
	const headerImage = document.querySelector('.header .parallax-img')
	const heroImage = document.querySelector('.hero-img .parallax-img')

	if (headerImage) {
		headerImage.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)'
	}

	if (heroImage) {
		const heroOffset = document.querySelector('.hero-img').offsetTop
		if (scrollPosition > heroOffset) {
			heroImage.style.transform = 'translateY(' + (scrollPosition - heroOffset) * 0.5 + 'px)'
		} else {
			heroImage.style.transform = 'translateY(0)'
		}
	}
})
