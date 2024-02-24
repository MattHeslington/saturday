<script>
	export let showLargeFilter
	import ModalHeader from './modal-header.svelte'
	import { Button } from 'bits-ui'
	import { fade } from 'svelte/transition'
</script>

<div in:fade={{ delay: 400, duration: 300 }} class="flex h-full w-full flex-col justify-between">
	<ModalHeader>How many bedrooms?</ModalHeader>
	<button on:click={() => showLargeFilter()}><Button.Root>Show all options</Button.Root></button>
</div>
