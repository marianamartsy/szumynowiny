const objectInfoCards = document.querySelectorAll('.object-info__card')

objectInfoCards.forEach(card => {
	card.addEventListener('touchstart', function () {
		this.classList.add('touch-active')
	})
})
