<script>
	import * as Tabs from '$lib/components/ui/tabs'
	import Message from './message.svelte'

	const triggers = [
		{ id: 'all', title: 'All' },
		{ id: 'starred', title: 'Starred' },
		{ id: 'archived', title: 'Archived' },
		{ id: 'deleted', title: 'Deleted' }
	]

	const messageData = [
		{
			username: 'SarahJ',
			createdAt: '2024-02-27T15:23:00.000+00:00',
			villaName: 'Villa Sunset',
			message: 'Just wanted to confirm our check-in time for tomorrow. Looking forward to our stay!'
		},
		{
			username: 'Mike_1985',
			createdAt: '2024-02-27T10:05:00.000+00:00',
			villaName: 'Ocean Breeze',
			message: 'Can we arrange an airport pickup? Our flight arrives at 2:30 PM.'
		},
		{
			username: 'BeachLover22',
			createdAt: '2024-02-26T20:12:00.000+00:00',
			villaName: 'Seaview Retreat',
			message: "Are there any good restaurants within walking distance? We'd love some local recommendations."
		},
		{
			username: 'AdventureFam',
			createdAt: '2024-02-26T11:45:00.000+00:00',
			villaName: 'Tropical Paradise',
			message: 'What are the best snorkeling spots nearby?'
		}
	]
</script>

<div class="mb-5 h-[calc(100vh-92px)] w-full overflow-hidden rounded-md border border-border">
	<header class="grid h-16 w-full shrink-0 grid-cols-12 items-center justify-start border-b border-border text-xl font-bold">
		<h2 class="col-span-3 flex h-full items-center border-r border-border pl-[10px]">Conversations</h2>
		<h2 class="col-span-6 flex h-full items-center border-r border-border pl-[10px]">Messages</h2>
		<h2 class="col-span-3 flex h-full items-center pl-[10px]">Information</h2>
	</header>
	<main class="grid h-full w-full grid-cols-12">
		<div class="col-span-3 h-full border-r border-border">
			<Tabs.Root value="all">
				<Tabs.List class="grid h-8 w-full grid-cols-4 divide-x-[1px] divide-border border-b border-border bg-background p-0">
					{#each triggers as trigger}
						<Tabs.Trigger value={trigger.id} class="col-span-1 grid h-full place-content-center text-xs font-bold"
							>{trigger.title}</Tabs.Trigger>
					{/each}
				</Tabs.List>
				<Tabs.Content value="all">
					{#each messageData as message}
						<Message
							username={message.username}
							createdAt={message.createdAt}
							villaName={message.villaName}
							message={message.message} />
					{/each}
				</Tabs.Content>
				<Tabs.Content value="starred">Starred</Tabs.Content>
				<Tabs.Content value="archived">Archived</Tabs.Content>
				<Tabs.Content value="deleted">Deleted</Tabs.Content>
			</Tabs.Root>
		</div>
		<div class="col-span-9 max-h-[calc(100%-63px)] overflow-hidden">
			<slot />
		</div>
	</main>
</div>
