<script>
	export let listing
	import Like from './like.svelte'
	import Price from '$lib/components/price.svelte'
	import Carousel from './carousel.svelte'
</script>

<div class="relative">
	<a href={listing.slug}>
		<article class="col-span-1 flex h-max w-full cursor-pointer flex-col space-y-1">
			<Carousel photos={listing.photos} />
			<h2 class="line-clamp-1 text-lg font-bold [view-transition-name:listingtitle]">{listing.title}</h2>
			<p class="line-clamp-3 text-muted-foreground">{listing.description}</p>
			<footer class="flex items-center justify-between">
				<div class="flex items-center font-bold">
					<Price price={listing.basePrice} /><span class="text-sm font-light">&nbsp;/&nbsp;night</span>
				</div>
				<div class="text-sm font-light">NEW</div>
			</footer>
		</article>
	</a>
	<div class="absolute right-2 top-1 z-[10] grid h-8 w-8 place-content-center">
		<Like listingId={listing._id} ownerId={listing.ownerId} />
	</div>
</div>
