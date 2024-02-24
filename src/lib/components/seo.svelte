<script>
	export let bc
	import { breadcrumbs, siteName } from './globalStore.js'
	breadcrumbs.set(bc)
	export let description =
		'Discover a world of unique accommodations and unforgettable experiences on our cutting-edge platform. Explore a curated selection of stunning vacation rentals, from cozy urban apartments to breathtaking countryside escapes. Book your next adventure with us and immerse yourself in the future of travel.'

	function generateTitle(bc) {
		if (bc.length === 1) {
			return `${bc[0].title}`
		} else if (bc.length > 1) {
			const pageTitle = bc.map((item) => item.title).join(' | ')
			return `${pageTitle}`
		}
	}

	const pageTitle = generateTitle(bc)
</script>

<svelte:head>
	<title>{$siteName} | {pageTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Ultimate Villas, Luxury Vacation Rentals, Private Villas, Vacation Homes, Exclusive Getaways, Villa Rentals, High-End Accommodation, Dream Villas, Prestigious Retreats, Luxury Vacation Properties, Secluded Villas, Elite Holiday Homes, Upscale Rentals, Top-tier Villas, Premium Holiday Villas, Exquisite Retreats, Lavish Vacation Homes, Deluxe Villas, Ultimate Travel Experiences, Luxury Villa Escapes, High-End Getaways, Luxury Holiday Rentals, Exclusive Villa Stays, Villa Resorts" />
	<meta name="author" content="UltimateVillas" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="utf-8" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="google" content="notranslate" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="theme-color" content="#FCFCFD" />
	<meta name="msapplication-TileColor" content="#FCFCFD" />
</svelte:head>
