<script>
	import { user } from '$lib/globalStore.js'
	import { Button } from '$lib/components/ui/button'
	import { buttons } from './buttonData.js'
	import * as Avatar from '$lib/components/ui/avatar'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'

	let authUser
	user.subscribe((value) => {
		authUser = value
	})
</script>

{#if authUser.loggedIn}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Button variant="outline" class="mt-[6px] h-9 w-9">
				<Avatar.Root class="h-9 w-9 rounded-md">
					<Avatar.Image src={authUser.avatar} alt={authUser.username} class="object-cover object-center" />
					<Avatar.Fallback>{authUser.fallback}</Avatar.Fallback>
				</Avatar.Root>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="grid h-[360px] w-[768px] grid-cols-3 grid-rows-4 justify-between gap-2 rounded-md p-2 ">
			<DropdownMenu.Item class="col-span-1 row-span-4 rounded-md bg-muted">Video</DropdownMenu.Item>
			{#each buttons as button}
				<DropdownMenu.Item
					href={button.url}
					class="col-span-1 row-span-1 flex h-full w-full cursor-pointer flex-col items-start justify-start space-y-[2px] rounded-md">
					<h4 class="font-bold">{button.title}</h4>
					<p class="line-clamp-2 text-left text-[14px] leading-snug text-muted-foreground">{button.body}</p>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{:else}
	<Button variant="outline">Login</Button>
{/if}
