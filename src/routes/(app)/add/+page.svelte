<script>
	export let data
	import { superForm } from 'sveltekit-superforms'
	const { form, enhance } = superForm(data.form)
	import SuperDebug from 'sveltekit-superforms'
</script>

<SuperDebug data={$form} class="overflow-y-auto" />

<main class="relative h-full w-full overflow-y-auto px-5 lg:container lg:mx-auto lg:w-[1120px]">
	<form method="POST" class="flex h-max w-full flex-col" use:enhance>
		<input bind:value={$form.placeName} type="text" name="placeName" placeholder="name" />
		<input bind:value={$form.title} type="text" name="title" placeholder="title" />
		<textarea bind:value={$form.description} name="description" id="" cols="30" rows="10"></textarea>
		<select bind:value={$form.amSt} name="amSt" id="" multiple>
			<option value="">Amenties</option>
			<option value="wifi">wifi</option>
			<option value="pool">pool</option>
			<option value="air-con">air con</option>
			<option value="music">music</option>
		</select>
		<select bind:value={$form.amSp} name="amSp" id="" multiple>
			<option value="">Special</option>
			<option value="maid">maid</option>
			<option value="breakfasts">breakfasts</option>
			<option value="car">car</option>
			<option value="butler">butler</option>
		</select>
		<label for="complete" class="flex items-center">
			<div>complete</div>
			<input bind:checked={$form.complete} type="checkbox" name="complete" id="complete" />
		</label>
		<button type="submit">save</button>
	</form>
</main>
