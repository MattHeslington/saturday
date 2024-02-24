<script>
	import Navigation from './navigation.svelte'
</script>

<div class="flex w-full flex-col items-start justify-start space-y-10">
	<Navigation />
	<main class="flex w-full items-start justify-center">
		<div class="flex w-[718px] flex-col">
			<slot />
		</div>
	</main>
</div>
