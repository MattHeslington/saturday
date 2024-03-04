const api = import.meta.env.VITE_API_BASE_URL

export async function load({ fetch, params }) {
	const res = await fetch(`${api}/api/listings/fetch-all`)
	const items = await res.json()

	return { items }
}
