const heroImg = document.querySelector('.hero-img')
const rellaxImg = document.querySelector('.rellax img')

function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

if (isSafari()) {
	heroImg.style.backgroundAttachment = 'initial'
	rellaxImg.style.display = 'block'
}
