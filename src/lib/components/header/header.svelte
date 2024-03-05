<script>
	import { user } from '$lib/globalStore.js'
	import { page } from '$app/stores'
	import { Button } from '$lib/components/ui/button'
	import Logo from './logo.svelte'
	// import Filter from './filter/filter.svelte'
	import Currency from './currency.svelte'
	import ThemeButton from './theme-button.svelte'
	import AccountButton from './account-button/account-button.svelte'

	let authUser
	user.subscribe((value) => {
		authUser = value
	})
	$: {
		console.log('user', authUser.loggedIn)
	}
</script>

<nav class="flex h-[72px] w-full shrink-0 items-center justify-between">
	<div class="min-w-[240px]">
		<Logo />
	</div>
	{#if $page.url.pathname === '/'}
		<!-- <Filter /> -->
		<div>filter</div>
	{/if}
	<div class="flex h-full w-[240px] items-center justify-end space-x-2">
		<Currency />
		<ThemeButton />
		{#if authUser.loggedIn}
			<AccountButton />
		{:else}
			<Button href="/log-in" variant="outline">Login</Button>
		{/if}
	</div>
</nav>
