<script>
	import * as Select from '$lib/components/ui/select'
	import { selectedCurrency } from '$lib/globalStore.js'
	import { currencies } from '$lib/utils/currencies'

	const updateFunction = ({ curr, next, selected }) => {
		console.log('currency changed', selected)
		// selectedCurrency.set(next.value)
		// addToast({
		// 	data: {
		// 		title: 'Success',
		// 		description: 'Currency changed to ' + next.value,
		// 		color: 'bg-green-500'
		// 	}
		// })
		return next
	}
</script>

<Select.Root onSelectedChange={updateFunction}>
	<Select.Trigger class="w-[140px]">
		<Select.Value placeholder="Select currency" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Currencies</Select.Label>
			{#each currencies as currency}
				<Select.Item value={currency.value} label={currency.label}>{currency.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="selectedCurrency" />
</Select.Root>
