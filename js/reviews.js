const reviewsDiv = document.querySelector('.reviews__google-user-ratings')

async function fetchPlaceDetails() {
	try {
		const response = await fetch('https://szumynowiny-back.vercel.app/api/place-details')
		const responseData = await response.text()

		console.log(responseData)
		let data
		try {
			data = JSON.parse(responseData)
		} catch (error) {
			console.error('Błąd parsowania JSON:', error)
			return
		}

		const { userRating, totalRatings } = data

		reviewsDiv.textContent = `Ocena: ${userRating} z ${totalRatings || 0} opinii`
	} catch (error) {
		console.error('Błąd podczas pobierania danych z backendu:', error)
	}
}

window.addEventListener('load', fetchPlaceDetails)
