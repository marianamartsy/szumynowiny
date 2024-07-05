const reviewsDiv = document.querySelector('.reviews__google-user-ratings')

async function fetchPlaceDetails() {
	try {
		const response = await fetch('https://szumynowiny-back.vercel.app/api/place-details')
		const data = await response.json()

		const { userRating, totalRatings } = data

		reviewsDiv.textContent = `Ocena: ${userRating} z ${totalRatings || 0} opinii`
	} catch (error) {
		console.error('Błąd podczas pobierania danych z backendu:', error)
	}
}

window.addEventListener('load', fetchPlaceDetails)
