const objectInfoCards = document.querySelectorAll('.object-info__card')

object-infoCards.forEach(card => {
	card.addEventListener('touchstart', function () {
		this.classList.add('touch-active')
	})
})
