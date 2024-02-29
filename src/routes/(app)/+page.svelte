<script>
	export let data
	import SEO from '$lib/components/seo.svelte'
	const bc = [{ title: 'Home', url: null }]
	console.log('external data', data)
	const listings = data.items
</script>

<SEO {bc} />
<h1 class="text-4xl font-bold">Welcome to HvelteKit</h1>

{#each listings as listing}
	<div>{listing.name}</div>
{/each}
