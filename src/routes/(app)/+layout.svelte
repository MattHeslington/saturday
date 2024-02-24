<script>
	// export let data
	// console.log('layout data', data)
	import Header from '$lib/components/header/header.svelte'
</script>

<div class="flex h-screen w-screen flex-col px-5">
	<Header />
	<slot />
</div>
