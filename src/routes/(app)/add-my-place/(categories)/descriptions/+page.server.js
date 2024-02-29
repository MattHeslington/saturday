const api = import.meta.env.VITE_API_BASE_URL

export const actions = {
	default: async ({ event, request }) => {
		const data = await request.formData()
		const text = data.get('text')

		// Specify the external endpoint URL
		const externalEndpoint = `${api}/listings/post`
		console.log(externalEndpoint)
		// Use fetch API to post data to the external endpoint
		const response = await fetch(externalEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text: text
			})
		})

		// Handle response from the external endpoint
		if (!response.ok) {
			// Handle error
			throw new Error(`Failed to post data: ${response.statusText}`)
		}

		const responseData = await response.json()
		// Process the response data as needed
		console.log('post responseData', responseData)
	}
}
