<script>
	export let photos
	photos = photos.sort((a, b) => a.order - b.order)

	import { AspectRatio } from '$lib/components/ui/aspect-ratio'
</script>

<div class="col-span-1">
	<AspectRatio ratio={1 / 1} class="snap-y snap-mandatory overflow-y-auto rounded-md">
		{#each photos as { url, order } (order)}
			{#if order === 0}
				<img
					src={`${url}/carousel`}
					alt="bag"
					class="h-full w-full snap-center snap-always object-cover object-center [view-transition-name:mainimage]" />
			{:else}
				<img
					src={`${url}/carousel`}
					alt="bag"
					class="h-full w-full snap-center snap-always object-cover object-center"
					loading="lazy" />
			{/if}
		{/each}
	</AspectRatio>
</div>
