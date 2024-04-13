<script>
	export let data
	import { schema } from './schema.js'
	import { superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { placeType } from './placeType.js'
	import { spaceType } from './spaceType.js'
	import { highlights } from './highlights.js'
	import { amenitiesSpecial } from './amenitiesSpecial.js'
	import { amenitiesStandard } from './amenitiesStandard.js'
	import { Field, Control, Label, Description, FieldErrors, Fieldset, Legend } from 'formsnap'
	import SuperDebug from 'sveltekit-superforms'

	const form = superForm(data.form, {
		validators: zodClient(schema)
	})
	const { form: formData, enhance } = form

	import SEO from '$lib/components/seo.svelte'
	const bc = [
		{ title: 'Add My Place', url: '/add-my-place' },
		{ title: 'General Info', url: '/add-my-place/general-info' }
	]
</script>

<SEO {bc} />
<div class="hidden w-full space-x-5">
	<div>general</div>
	<div>name</div>
	<div>title</div>
	<div>placeType</div>
	<div>spaceType</div>
	<div>highlights</div>
	<div>special location</div>
	<div>standard amenities</div>
	<div>special amenities</div>
	<div>bedrooms</div>
	<div>beds</div>
	<div>bathrooms</div>
	<div>guests</div>
	<div>check-in</div>
	<div>check-out</div>
	<div>smoking</div>
	<div>events</div>
	<div>parking</div>
	<div>description</div>
	<div>locale</div>
</div>

<form method="POST" use:enhance>
	<Field {form} name="name">
		<Control let:attrs>
			<Label>Name</Label>
			<input {...attrs} type="text" bind:value={$formData.name} />
		</Control>
		<Description>If your place doesn't have a name, enter a name for your reference</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="title">
		<Control let:attrs>
			<Label>Title</Label>
			<input {...attrs} type="text" bind:value={$formData.title} />
		</Control>
		<Description>Describe your place</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="placeType">
		<Control let:attrs>
			<Label>What type of place?</Label>
			<select {...attrs} bind:value={$formData.placeType}>
				{#each placeType as type}
					<option value={type.value}>{type.label}</option>
				{/each}
			</select>
		</Control>
		<Description>Select the most appropriate option</Description>
		<FieldErrors />
	</Field>

	<Field {form} name="spaceType">
		<Control let:attrs>
			<Label>What type of space?</Label>
			<select {...attrs} bind:value={$formData.spaceType}>
				{#each spaceType as type}
					<option value={type.value}>{type.label}</option>
				{/each}
			</select>
		</Control>
		<Description>Select the most appropriate option</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="highlights">
		<Legend>Highlights</Legend>
		{#each highlights as highlight}
			<Control let:attrs>
				<input {...attrs} type="checkbox" bind:group={$formData.highlights} value={highlight.value} />
				<Label>{highlight.label}</Label>
			</Control>
		{/each}
		<Description>Select up to three that apply</Description>
		<FieldErrors />
	</Fieldset>
	<Fieldset {form} name="amStandard">
		<Legend>Standard Amenities</Legend>
		{#each amenitiesStandard as amenity}
			<Control let:attrs>
				<input {...attrs} type="checkbox" bind:group={$formData.amStandard} value={amenity.value} />
				<Label>{amenity.label}</Label>
			</Control>
		{/each}
		<Description>Select all that apply</Description>
		<FieldErrors />
	</Fieldset>
	<Fieldset {form} name="amSpecial">
		<Legend>Special Amenities</Legend>
		{#each amenitiesSpecial as amenity}
			<Control let:attrs>
				<input {...attrs} type="checkbox" bind:group={$formData.amSpecial} value={amenity.value} />
				<Label>{amenity.label}</Label>
			</Control>
		{/each}
		<Description>Select all that apply</Description>
		<FieldErrors />
	</Fieldset>
	<button type="submit">submit</button>
</form>
<SuperDebug data={$formData} />
