const privacyMessageBox = document.querySelector('.privacy-message')
const buttons = document.querySelectorAll('.privacy-message__button, .privacy-message__icon')

if (sessionStorage.getItem('cookieAccepted')) {
	privacyMessageBox.style.display = 'none'
}

buttons.forEach(button => {
	button.addEventListener('click', () => {
		privacyMessageBox.style.display = 'none'
		sessionStorage.setItem('cookieAccepted', 'true')
	})
})
