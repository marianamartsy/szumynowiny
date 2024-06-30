const objectInfoCards = document.querySelectorAll('.object-info__card-img-info')

objectInfoCards.forEach(card => {
	card.addEventListener('touchstart', function () {
		this.classList.add('touch-active')
	})
})
