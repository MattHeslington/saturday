<script>
	import { flip } from 'svelte/animate'
	import { quintOut } from 'svelte/easing'
	import { clickOutside } from '$lib/utils/clickOutside.js'
	import { selectedDates } from '$lib/globalStore.js'

	import ModalLocation from './modal-location.svelte'
	import ModalDates from './modal-dates.svelte'
	import ModalRooms from './modal-rooms.svelte'
	import ModalAll from './modal-all.svelte'

	let expanded = false
	let selected = null

	let calendarDates = {}
	selectedDates.subscribe((value) => {
		calendarDates = value
	})

	// FILTER STATE
	let location
	let textStart = 'bag'
	let textEnd = 'lad'

	// UPDATE STATE FUNCTIONS
	function updateLocation(selectedLocation) {
		location = selectedLocation
	}

	// ABSTRACT TO SEPARATE FILE
	function showLargeFilter() {
		expanded = true
		selected = 'all'
	}

	function clickLocation() {
		expanded = true
		selected = 'location'
	}

	function clickDates() {
		expanded = true
		selected = 'dates'
	}

	function clickRooms() {
		expanded = true
		selected = 'rooms'
	}

	function handleClickOutside() {
		expanded = false
	}

	// HACK FOR ANIMATION
	const things = ['one']
</script>

<div use:clickOutside on:click_outside={handleClickOutside} class="relative grid h-9 w-[800px] grid-cols-3 rounded-md border border-border">
	<button on:click={clickLocation} class="col-span-1 border-r border-border pl-2 text-left font-bold tracking-tight hover:bg-muted"
		>{location ? location : 'Location'}</button>
	<button on:click={clickDates} class="col-span-1 border-r border-border pl-2 text-left font-bold tracking-tight hover:bg-muted"
		>{calendarDates.startDate && calendarDates.endDate ? textStart + ' to ' + textEnd : 'Dates'}</button>
	<button on:click={clickRooms} class="col-span-1 pl-2 text-left font-bold tracking-tight hover:bg-muted">Rooms</button>
	<button class="bg-slate-12 text-slate-1 absolute right-0 top-[0px] h-[34px] rounded-md px-4 pb-[1px] font-bold tracking-tight"
		>Search</button>

	{#if expanded === true}
		{#each things as thing (thing)}
			<div
				animate:flip={{ delay: 0, duration: 500, easing: quintOut }}
				class={`border-slate-6 bg-slate-1 absolute top-[40px] z-10 overflow-hidden rounded-md border
            ${selected === 'location' ? 'left-0 h-[480px] w-[434px] p-[10px]' : ''}
            ${selected === 'dates' ? 'left-0 right-0 h-[520px] w-[800px] p-[10px]' : ''} 
            ${selected === 'rooms' ? 'right-0 h-[160px] w-[300px] p-[10px]' : ''}
			${selected === 'all' ? '-top-[8px] left-0 right-0 h-[860px] w-[810px] px-[10px] pb-[10px] pt-[4px]' : ''} `}>
				{#if selected === 'location'}
					<ModalLocation {showLargeFilter} {updateLocation} />
				{:else if selected === 'dates'}
					<ModalDates {showLargeFilter} />
				{:else if selected === 'rooms'}
					<ModalRooms {showLargeFilter} />
				{:else if selected === 'all'}
					<ModalAll />
				{/if}
			</div>
		{/each}
	{/if}
</div>
