<script>
	import { Heart } from 'lucide-svelte'
	import { toast } from 'svelte-sonner'

	const loggedIn = true
	let liked = false

	function handleLike() {
		liked = true
		toast('Villa Liked')
	}

	function handleUnLike() {
		liked = false
		toast('Like Removed')
	}
</script>

{#if liked}
	<button on:click={handleUnLike}>
		<Heart color="black" fill="#FFF" strokeWidth={1} />
	</button>
{:else}
	<button on:click={handleLike}>
		<Heart color="white" fill="#000" strokeWidth={1} />
	</button>
{/if}
