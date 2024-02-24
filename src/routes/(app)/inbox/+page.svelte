<script>
	import SEO from '$lib/components/seo.svelte'
	const bc = [{ title: 'Inbox', url: '/inbox' }]
</script>

<SEO {bc} />

<div class="grid h-full grid-cols-9">
	<div class="border-slate-6 col-span-6 h-full border-r p-5">
		<h3 class="">Messages</h3>
	</div>
	<div class="col-span-3 h-full p-5">
		<h3 class="">Information</h3>
	</div>
</div>
