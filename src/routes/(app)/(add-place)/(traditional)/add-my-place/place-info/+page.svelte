<script>
	import * as ToggleGroup from '$lib/components/ui/toggle-group'
	import { placeType } from './placeType.js'
	import Title from '../section-header.svelte'
	import SEO from '$lib/components/seo.svelte'
	const bc = [
		{ title: 'Add My Place', url: '/add-my-place' },
		{ title: 'Place Info', url: '/add-my-place/place-info' }
	]
</script>

<SEO {bc} />
<div class="h-full w-full">
	<Title title="Place Info" />
	<ToggleGroup.Root type="single" class="grid w-full grid-cols-3 gap-10">
		{#each placeType as item}
			<ToggleGroup.Item
				value={item.value}
				class="col-span-1 flex h-max flex-col items-start justify-start border border-border px-[10px] py-[6px] capitalize">
				<div class="scroll-m-20 text-xl font-semibold tracking-tight">{item.label}</div>
				<p class="mt-2 line-clamp-3 text-left text-muted-foreground">{item.description}</p>
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</div>
