<script>
	import { Checkbox } from '$lib/components/ui/checkbox'
	import Label from '$lib/components/ui/label/label.svelte'
	import SEO from '$lib/components/seo.svelte'

	import { amenitiesStandard } from './amenitiesStandard'

	const bc = [
		{ title: 'Add My Place', url: '/add-my-place' },
		{ title: 'Amenities', url: '/add-my-place/amenities' }
	]
</script>

<SEO {bc} />
<div class="h-full w-full border-l border-r border-border">
	<h2>amenities</h2>
	<div class="grid w-full grid-cols-3 gap-10">
		{#each amenitiesStandard as item}
			<div class="col-span-1 flex items-center justify-start space-x-2">
				<Checkbox id={item.value} />
				<Label for={item.value} class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					{item.name}
				</Label>
			</div>
		{/each}
	</div>
</div>
