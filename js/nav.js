const nav = document.querySelector('.nav__items')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__element')
const allSections = document.querySelectorAll('.section')



const navActive = () => {
	nav.classList.toggle('active')
	navBtnBars.classList.remove('dark-bars-color')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})

	handleNavItemsAnimation()
}



const handleNavItemsAnimation = () => {
	let delayTime = 0

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}



const handleObsrerver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('dark-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('dark-bars-color')
		}
	})
}




window.addEventListener('scroll', handleObsrerver)
navBtn.addEventListener('click', navActive)
