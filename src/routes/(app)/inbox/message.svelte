<script>
	export let username, createdAt, villaName, message
	import * as Avatar from '$lib/components/ui/avatar'
	import * as ContextMenu from '$lib/components/ui/context-menu'
	import Time from 'svelte-time'
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<div class="flex h-[94px] w-full flex-col border-b border-border p-2">
			<div class="flex h-[46px] w-full space-x-3">
				<div>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</div>
				<div class="flex w-full flex-col">
					<div class="flex w-full items-center justify-between">
						<div class="text-sm text-muted-foreground">{username}</div>
						<div class="text-sm text-muted-foreground">
							<Time relative timestamp={createdAt} />
						</div>
					</div>
					<div>{villaName}</div>
				</div>
			</div>
			<div class="mt-[6px] line-clamp-1 w-full text-sm text-muted-foreground">{message}</div>
		</div>
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item>Star</ContextMenu.Item>
		<ContextMenu.Item>Archive</ContextMenu.Item>
		<ContextMenu.Item>Delete</ContextMenu.Item>
		<ContextMenu.Item>Mark as Read</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
