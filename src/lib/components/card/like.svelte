<script>
	import * as Collapsible from '$lib/components/ui/collapsible'
	import * as Dialog from '$lib/components/ui/dialog'
	import * as Select from '$lib/components/ui/select'
	import { wishlists } from './wishlistStore.js'
	import { fetchData } from '$lib/utils/fetchData.js'
	import { onMount } from 'svelte'
	import { Button } from '$lib/components/ui/button'
	import { Input } from '$lib/components/ui/input'
	import { Heart } from 'lucide-svelte'
	import { toast } from 'svelte-sonner'
	import { user } from '$lib/globalStore.js'

	let authUser
	user.subscribe((value) => {
		authUser = value
	})

	let liked = false
	let loading = false
	let wishlistName = ''
	let uiWishlists = [
		{
			id: 0,
			wishlistName: 'My favourite places'
		}
	]

	$: {
		console.log('wishlistName', wishlistName)
	}

	$: {
		console.log('uiWishlists', uiWishlists)
	}

	async function like(selected) {
		wishlistName = selected
		liked = true
		await fetchData('https://api-uv.ultimatevillas.workers.dev/api/likes/add', 'POST', {
			listingid: 'abcdefg',
			ownerid: '1233',
			wishlistid: '55555'
		})
		toast('Villa Liked')
	}

	async function unlike() {
		liked = false
		await fetchData('https://api-uv.ultimatevillas.workers.dev/api/likes/remove', 'DELETE', {
			listingid: 'abcdefg',
			ownerid: '1233',
			wishlistid: '55555'
		})
		toast('Like Removed')
	}

	async function getWishlists() {
		const userWishlists = await fetchData(
			`https://api.ultimatevillas.workers.dev/api/wishlists/get-user-wishlists?userId=${authUser.userId}`,
			'GET'
		)
		//console.log('userWishlists', userWishlists)
		// wishlists.set(userWishlists)
		if (userWishlists.length > 0) {
			uiWishlists = userWishlists
		}
	}

	async function createNewWishlist() {
		liked = true
		const slug = wishlistName
			.trim()
			.toLowerCase()
			.replace(/[ ,.]+/g, '-')
		await fetchData('https://api.ultimatevillas.workers.dev/api/wishlists/add-new-wishlist', 'POST', {
			userId: authUser.userId,
			username: authUser.username,
			wishlistName: wishlistName,
			wishlistSlug: slug
		})
		toast('Villa Liked')
		// close dialog
		open.set(false)
	}

	onMount(() => {
		getWishlists()
	})

	let collapsibleOpen = false
</script>

{#if liked}
	<button on:click={unlike}>
		<Heart color="black" fill="#FFF" strokeWidth={1} />
	</button>
{:else}
	<Dialog.Root>
		<Dialog.Trigger>
			<Heart color="white" fill="#000" strokeWidth={1} />
		</Dialog.Trigger>
		<Dialog.Content class="max-h-[85vh] w-[90vw] max-w-[350px] p-6">
			<Dialog.Header>
				<Dialog.Title>Add to your favourite places</Dialog.Title>
				<Dialog.Description>Save this villa to one of your lists, or create a new list.</Dialog.Description>
			</Dialog.Header>
			<Select.Root
				onSelectedChange={(v) => {
					v && like(v.value)
				}}
				class="w-full">
				<Select.Trigger class="w-full border border-border">
					<Select.Value placeholder="Select list" />
				</Select.Trigger>
				<Select.Content>
					{#each uiWishlists as x}
						<Select.Item value={x.wishlistName}>{x.wishlistName}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<Collapsible.Root bind:open={collapsibleOpen} class="w-full">
				<Collapsible.Trigger class="w-full"
					><Button variant="outline" class="w-full">{collapsibleOpen ? 'Close' : 'Create new list'}</Button></Collapsible.Trigger>
				<Collapsible.Content class="mt-3 grid grid-cols-12 gap-3">
					<Input bind:value={wishlistName} type="text" placeholder="e.g. Birthday Villas" class="col-span-8" />
					<Button on:click={createNewWishlist} variant="outline" class="col-span-4">Save</Button>
				</Collapsible.Content>
			</Collapsible.Root>
		</Dialog.Content>
	</Dialog.Root>
{/if}
