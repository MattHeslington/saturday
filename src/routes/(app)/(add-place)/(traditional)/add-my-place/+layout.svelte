<script>
	import Navigation from './navigation.svelte'
	import Footer from './footer.svelte'
</script>

<div class="flex h-full w-full flex-col items-start justify-start space-y-10">
	<Navigation />
	<main class="flex h-full w-full items-start justify-center">
		<div class="flex h-full w-[718px] flex-col">
			<slot />
			<Footer />
		</div>
	</main>
</div>
