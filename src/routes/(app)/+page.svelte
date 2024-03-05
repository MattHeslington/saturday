<script>
	export let data
	import SEO from '$lib/components/seo.svelte'
	import Card from '$lib/components/card/card.svelte'
	const bc = [{ title: 'Home', url: null }]
	// console.log('external data', data)
	const listings = data.items
</script>

<SEO {bc} />

<div class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
	{#each listings as listing}
		<Card {listing} />
	{/each}
</div>
