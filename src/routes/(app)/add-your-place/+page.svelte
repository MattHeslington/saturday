<script>
	import * as Select from '$lib/components/ui/select'
	import * as Dialog from '$lib/components/ui/dialog'
	import { Input } from '$lib/components/ui/input'
	import { Button } from '$lib/components/ui/button'
	import { Textarea } from '$lib/components/ui/textarea'
	import { RangeCalendar } from '$lib/components/ui/range-calendar'
	import { amenitiesSpecial } from './amenitiesSpecial'
	import { amenitiesStandard } from './amenitiesStandard'
	import { today, getLocalTimeZone } from '@internationalized/date'

	let amenitiesX = []
	let amenitiesY = []

	const start = today(getLocalTimeZone())
	const end = start.add({ days: 7 })

	let value = {
		start,
		end
	}
</script>

<main class="relative h-full w-full px-5 lg:container lg:mx-auto lg:w-[1120px]">
	<input type="text" class="w-full bg-transparent text-[26px] font-bold tracking-tight" placeholder="Enter a title" />
	<div class="mt-4 grid w-full grid-cols-4 grid-rows-2 gap-1 overflow-hidden rounded-md">
		<div class="col-span-2 row-span-2 aspect-square bg-muted">
			<Input type="file" class="grid h-full w-full place-content-center" />
		</div>
		<div class="col-span-1 row-span-1 aspect-square bg-muted">
			<Input type="file" class="h-full w-full" />
		</div>
		<div class="col-span-1 row-span-1 aspect-square bg-muted">
			<Input type="file" class="h-full w-full" />
		</div>
		<div class="col-span-1 row-span-1 aspect-square bg-muted">
			<Input type="file" class="h-full w-full" />
		</div>
		<div class="col-span-1 row-span-1 aspect-square bg-muted">
			<Input type="file" class="h-full w-full" />
		</div>
	</div>
	<div class="grid w-full grid-cols-12 gap-5">
		<div class="col-span-8 mb-40">
			<input type="text" class="my-2 w-full bg-transparent text-xl font-bold tracking-tight" placeholder="Enter a title" />
			<Textarea placeholder="Type your description here." class="h-[300px] p-0 text-lg" />
			<div class="mt-4 flex w-full flex-col">
				<div class="flex w-full items-center justify-start gap-5">
					<div class="text-xl font-bold tracking-tight">Things you'll love</div>
					<Select.Root multiple onSelectedChange={(selected) => (amenitiesX = selected)}>
						<Select.Trigger class="w-[180px]">
							<Select.Value placeholder="Select" />
						</Select.Trigger>
						<Select.Content>
							{#each amenitiesSpecial as itemx}
								<Select.Item value={itemx.value}>{itemx.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mt-4 grid w-full grid-cols-3 gap-5">
					{#if amenitiesX.length === 0}
						<div class="col-span-3 rounded-md border border-border p-5 text-lg text-muted-foreground">
							Your amenites will appear here
						</div>
					{/if}
					{#each amenitiesX as itemz}
						<div class="col-span-1 grid h-[42px] place-content-center rounded-md border border-border capitalize">
							{itemz.label}
						</div>
					{/each}
				</div>
			</div>
			<div class="mt-4 flex w-full flex-col">
				<div class="flex w-full items-center justify-start gap-5">
					<div class="text-xl font-bold tracking-tight">More amenities</div>
					<Select.Root multiple onSelectedChange={(selected) => (amenitiesY = selected)}>
						<Select.Trigger class="w-[180px]">
							<Select.Value placeholder="Select" />
						</Select.Trigger>
						<Select.Content>
							{#each amenitiesStandard as itemy}
								<Select.Item value={itemy.value}>{itemy.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="mt-4 grid w-full grid-cols-3 gap-5">
					{#if amenitiesY.length === 0}
						<div class="col-span-3 rounded-md border border-border p-5 text-lg text-muted-foreground">
							Your amenites will appear here
						</div>
					{/if}
					{#each amenitiesY as itemv}
						<div class="col-span-1 grid h-[42px] place-content-center rounded-md border border-border capitalize">
							{itemv.label}
						</div>
					{/each}
				</div>
			</div>
			<div class="mb-5 mt-5 flex w-full items-center justify-start">
				<div class="text-xl font-bold tracking-tight">Availability</div>
				<Dialog.Root>
					<Dialog.Trigger><Button class="ml-4">Add yourcalendar</Button></Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
							<Dialog.Description>
								This action cannot be undone. This will permanently delete your account and remove your data from our
								servers.
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			</div>

			<RangeCalendar bind:value numberOfMonths={2} class="rounded-md border shadow" />
		</div>
		<div class="col-span-4 mt-4 flex h-max shrink-0 flex-col items-baseline justify-start rounded-md border border-border p-5">
			<div class="flex w-full items-center justify-start pb-[10px]">
				<div class="text-3xl text-muted-foreground">$299</div>
				<div class="text-lg font-light">/ night</div>
				<Dialog.Root>
					<Dialog.Trigger><Button class="ml-4">Add pricing</Button></Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
							<Dialog.Description>
								This action cannot be undone. This will permanently delete your account and remove your data from our
								servers.
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			</div>
			<div class="grid w-full grid-cols-2 grid-rows-2 rounded-md border border-border">
				<div class="col-span-1 flex h-6 flex-col items-start justify-start border-r border-border p-[4px]">
					<div class="text-xs text-muted-foreground">Check-in</div>
					<div class="text-sm">mm/dd/yy</div>
				</div>
				<div class="col-span-1 flex h-6 flex-col items-start justify-start p-[4px]">
					<div class="text-xs text-muted-foreground">Check-out</div>
					<div class="text-sm">mm/dd/yy</div>
				</div>
				<div class="col-span-2 flex-col items-start justify-start border border-t border-border p-[4px]">
					<div class="text-xs text-muted-foreground">Guests</div>
					<div class="text-sm">Please select</div>
				</div>
			</div>
			<Button variant="outline" class="mt-[10px] w-full">Reserve</Button>
		</div>
	</div>

	<Button class="fixed bottom-5 right-5 w-[110px]">Save</Button>
</main>
