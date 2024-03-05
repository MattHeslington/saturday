<script>
	import { Checkbox } from '$lib/components/ui/checkbox'
	import Label from '$lib/components/ui/label/label.svelte'
	import Title from '../section-header.svelte'
	import SEO from '$lib/components/seo.svelte'

	import { amenitiesStandard } from './amenitiesStandard'
	import { AmenitiesSpecial } from './amenitiesSpecial'

	let standardValues = []
	let specialValues = []

	function handleStandardChange(checked, value) {
		if (checked) {
			standardValues = [...standardValues, value]
		} else {
			standardValues = standardValues.filter((item) => item !== value)
		}
	}

	function handleSpecialChange(checked, value) {
		if (checked) {
			specialValues = [...specialValues, value]
		} else {
			specialValues = specialValues.filter((item) => item !== value)
		}
	}

	$: {
		console.log('standardValues', standardValues)
	}

	$: {
		console.log('specialValues', specialValues)
	}

	const bc = [
		{ title: 'Add My Place', url: '/add-my-place' },
		{ title: 'Amenities', url: '/add-my-place/amenities' }
	]
</script>

<SEO {bc} />
<div class="h-full w-full">
	<Title title="Amenities" />
	<div class="grid w-full grid-cols-3 gap-10">
		{#each amenitiesStandard as item}
			<div class="col-span-1 flex items-center justify-start space-x-2">
				<Checkbox
					id={item.value}
					onCheckedChange={(checked) => handleStandardChange(checked, item.value)}
					class="border-muted-foreground text-muted-foreground checked:bg-muted-foreground" />
				<Label
					for={item.value}
					class="text-sm font-medium capitalize leading-none text-muted-foreground peer-checked:text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					{item.name}
				</Label>
			</div>
		{/each}
	</div>
	<Title title="Special Amenities" />
	<div class="grid w-full grid-cols-3 gap-10">
		{#each AmenitiesSpecial as item}
			<div class="col-span-1 flex items-center justify-start space-x-2">
				<Checkbox
					id={item.value}
					onCheckedChange={(checked) => handleSpecialChange(checked, item.value)}
					class="border-muted-foreground text-muted-foreground checked:bg-muted-foreground" />
				<Label
					for={item.value}
					class="text-sm font-medium capitalize leading-none text-muted-foreground peer-checked:text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					{item.name}
				</Label>
			</div>
		{/each}
	</div>
</div>
