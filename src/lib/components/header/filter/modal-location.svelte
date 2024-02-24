<script>
	export let updateLocation
	export let showLargeFilter
	import ModalHeader from './modal-header.svelte'
	import { fetchData } from '$lib/utils/fetchData.js'
	import { Button } from 'bits-ui'
	import { fade } from 'svelte/transition'
	import { X } from 'lucide-svelte'
	const searches = ['London', 'Sheffield', 'Antigua', 'Koh Samui', 'Greece', 'Florida', 'York', 'Seminyak', 'Laos']

	let coords = []
	let placeId = ''
	let mySelected = ''
	let predictions = []
	let debouncedInput = ''

	// DEBOUNCE
	let timer
	const debounce = (e) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			debouncedInput = e.target.value
			getPredictions()
		}, 800)
	}
	// END

	async function getPredictions() {
		const fetchedPredictions = await fetchData(`/api/places/autocomplete?debouncedInput=${debouncedInput}`, 'GET')
		console.log('fetchedPredictions', fetchedPredictions.predictions)
		predictions = fetchedPredictions.predictions
	}

	function handleRemove(search) {
		console.log('remove', search)
	}

	function handleLocation(prediction) {
		console.log('handleLocation called', prediction)
		let firstPart = prediction.description.split(',')[0]
		updateLocation(firstPart)
	}
</script>

<div in:fade={{ delay: 400, duration: 300 }} class="flex h-full w-full flex-col justify-between">
	<div class="flex w-full flex-col space-y-1">
		<!-- <div class="w-full flex justify-between items-center">
			<div class="w-full font-bold tracking-tight text-lg">Enter a Location</div>
			<button class="text-slate-12 text-sm font-bold">Clear</button>
		</div> -->
		<ModalHeader>Enter a Location</ModalHeader>
		<input on:input={debounce} type="text" class="border-slate-6 mt-2 h-10 w-full rounded-sm border bg-white px-2 dark:bg-black" />
	</div>
	<div class="h-full w-full overflow-y-auto">
		{#if predictions.length === 0}
			<div class="text-slate-11 my-2 w-full pl-2 text-sm font-bold uppercase tracking-tight">Recent Searches</div>
			{#each searches as search (search)}
				<div class="hover:bg-slate-3 group relative mt-[1px] flex h-10 w-full cursor-pointer items-center px-2 first-of-type:mt-2">
					{search}
					<button
						on:click={() => handleRemove(search)}
						class="absolute right-0 top-0 hidden h-10 w-10 place-content-center group-hover:grid"><X size={20} /></button>
				</div>
			{/each}
		{:else}
			<div class="text-slate-11 my-2 w-full pl-2 text-sm font-bold uppercase tracking-tight">Search Results</div>
			{#each predictions as prediction}
				<button
					on:click={handleLocation(prediction)}
					class="hover:bg-slate-3 mt-[1px] line-clamp-1 h-10 w-full whitespace-nowrap px-2 text-left first-of-type:mt-2"
					>{prediction.description}</button>
			{/each}
		{/if}
	</div>
	<button on:click={() => showLargeFilter()}><Button.Root>Show all options</Button.Root></button>
</div>
