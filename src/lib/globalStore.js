import { writable } from 'svelte/store'

export const siteName = writable('UltimateVillas')
export const user = writable({
	loggedIn: true,
	userId: 'abd123',
	username: 'MattHeslington',
	fallback: 'MH',
	avatar: 'https://avatars.githubusercontent.com/u/8208896?v=4'
})
export const breadcrumbs = writable([])
export const selectedDates = writable({})
export const selectedCurrency = writable('USD')
