import { schema } from './schema'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export async function load() {
	return {
		form: await superValidate(zod(schema))
	}
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema))

		if (!form.valid) {
			return fail(400, { form })
		}

		return { form }
	}
}
