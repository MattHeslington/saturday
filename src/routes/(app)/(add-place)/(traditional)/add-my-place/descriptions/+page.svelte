<script>
	import { enhance } from '$app/forms'
	import SEO from '$lib/components/seo.svelte'
	const bc = [
		{ title: 'Add My Place', url: '/add-my-place' },
		{ title: 'Descriptions', url: '/add-my-place/descriptions' }
	]
</script>

<SEO {bc} />
<div>descriptions</div>
<form method="POST" use:enhance>
	<input name="text" type="text" class="w-300 h-10 border-border" />
	<button type="submit" class="w-300 h-10 border-border">Post</button>
</form>
