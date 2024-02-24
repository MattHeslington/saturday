<script>
	export let data
	import { page } from '$app/stores'
	import { Button } from '$lib/components/ui/button'
	import Logo from './logo.svelte'
	import ThemeButton from './theme-button.svelte'
</script>

<nav class="flex h-[72px] w-full shrink-0 items-center justify-between">
	<div class="min-w-[240px]">
		<Logo />
	</div>
	{#if $page.url.pathname === '/'}
		<div>Filter</div>
	{/if}
	<div class="flex h-full w-[240px] items-center justify-end space-x-2">
		<ThemeButton />
		{#if data?.userId}
			<div>Account</div>
		{:else}
			<a href="/log-in"><Button variant="outline">Login</Button></a>
		{/if}
	</div>
</nav>
