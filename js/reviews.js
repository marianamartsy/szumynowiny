const reviewsDiv = document.querySelector('.reviews__google-user-ratings')
const googleStarsDiv = document.querySelector('.reviews__google-stars')

async function fetchPlaceDetails() {
	try {
		const response = await fetch('https://szumynowiny-back.vercel.app/api/place-details')
		const responseData = await response.text()

		let data
		try {
			data = JSON.parse(responseData)
		} catch (error) {
			console.error('Błąd parsowania JSON:', error)
			return
		}

		const { userRating, totalRatings } = data

		reviewsDiv.textContent = `Ocena: ${userRating} z ${totalRatings || 0} opinii`
		updateStars(userRating, googleStarsDiv)
	} catch (error) {
		console.error('Błąd podczas pobierania danych z backendu:', error)
	}
}

function updateStars(rating, container) {
	const stars = container.querySelectorAll('.star')
	const fullStars = Math.floor(rating)
	const halfStar = rating % 1 >= 0.5 ? 1 : 0

	stars.forEach((star, index) => {
		star.style.display = 'inline-block'
		star.classList.remove('full', 'half')

		if (index < fullStars) {
			star.classList.add('full')
		} else if (index < fullStars + halfStar) {
			star.classList.add('half')
		}
	})
}

window.addEventListener('load', fetchPlaceDetails)
