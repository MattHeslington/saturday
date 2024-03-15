import { message, superValidate } from 'sveltekit-superforms'
import { fail } from '@sveltejs/kit'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod'

// Define outside the load function so the adapter can be cached
const schema = z.object({
	id: z.string(),
	createdAt: z.date(),
	ownerId: z.string(),
	amSp: z.array(z.string()),
	amSt: z.array(z.string()),
	basePrice: z.number().int(),
	bathrooms: z.number().int(),
	bedrooms: z.number().int(),
	beds: z.number().int(),
	cleaningFee: z.number().int(),
	complete: z.boolean(),
	description: z.string(),
	events: z.boolean(),
	featured: z.boolean(),
	guests: z.number().int(),
	highlights: z.array(z.string()),
	icalFiles: z.array(z.string()),
	icalLinks: z.array(z.string()),
	locale: z.string(),
	locationType: z.array(z.string()),
	minNights: z.number().int(),
	onOffer: z.boolean(),
	parking: z.boolean(),
	placeName: z.string(),
	placeType: z.string(),
	slug: z.string(),
	smoking: z.boolean(),
	spaceType: z.string(),
	systemPublished: z.boolean(),
	title: z.string(),
	userPublished: z.boolean()
})

export const load = async () => {
	const form = await superValidate(zod(schema))

	// Always return { form } in load functions
	return { form }
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema))
		console.log(form)

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form })
		}

		// TODO: Do something with the validated form.data

		// Display a success status message
		return message(form, 'Form posted successfully!')
	}
}
