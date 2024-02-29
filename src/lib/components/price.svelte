<script>
	export let price
	import { selectedCurrency } from '$lib/globalStore.js'
	// import { exchangeRates } from '$lib/stores.js'
	// EVENTUALLY THE EXCHANGE RATES WILL BE STORED IN THE DATABASE, AND UPDATED TWICE DAILY VIA A CRON JOB

	const exchangeRates = [
		{
			currency: 'USD',
			rate: 1,
			symbol: '$'
		},
		{
			currency: 'AUD',
			rate: 1.35,
			symbol: 'A$'
		},
		{
			currency: 'NZD',
			rate: 1.43,
			symbol: 'NZ$'
		},
		{
			currency: 'SGD',
			rate: 1.35,
			symbol: 'S$'
		},
		{
			currency: 'EUR',
			rate: 0.85,
			symbol: '€'
		},
		{
			currency: 'GBP',
			rate: 0.75,
			symbol: '£'
		},
		{
			currency: 'CNY',
			rate: 6.46,
			symbol: '¥'
		},
		{
			currency: 'RUB',
			rate: 73.52,
			symbol: '₽'
		},
		{
			currency: 'JPY',
			rate: 109.97,
			symbol: '¥'
		}
	]

	let usePrice
	let currency = ''
	selectedCurrency.subscribe((value) => {
		currency = value
		updatePrice()
	})

	function updatePrice() {
		if (currency === 'USD') {
			usePrice = `$${price}`
		} else {
			const selectedRate = exchangeRates.find((rate) => rate.currency === currency)
			if (selectedRate) {
				usePrice = (price * selectedRate.rate).toFixed(0) // Use toFixed to remove decimal places
				usePrice = `${selectedRate.symbol}${usePrice}` // Add currency symbol
			}
		}
	}

	updatePrice()
</script>

<div>{usePrice}</div>
