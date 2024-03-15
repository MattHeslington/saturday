import { message, superValidate } from 'sveltekit-superforms'
import { fetchData } from '$lib/utils/fetchData'
import { fail } from '@sveltejs/kit'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod'

// Define outside the load function so the adapter can be cached
const schema = z.object({
	id: z.string(),
	createdAt: z.date().default(() => new Date()),
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
		await fetchData('https://api-uv.ultimatevillas.workers.dev/api/listings/add', 'POST', {
			id: 'abc1',
			createdAt: form.data.createdAt,
			ownerId: form.data.ownerId,
			amSp: form.data.amSp,
			amSt: form.data.amSt,
			basePrice: form.data.basePrice,
			bathrooms: form.data.bathrooms,
			bedrooms: form.data.bedrooms,
			beds: form.data.beds,
			cleaningFee: form.data.cleaningFee,
			complete: form.data.complete,
			description: form.data.description,
			events: form.data.events,
			featured: form.data.featured,
			guests: form.data.guests,
			highlights: form.data.highlights,
			icalFiles: form.data.icalFiles,
			icalLinks: form.data.icalLinks,
			locale: form.data.locale,
			locationType: form.data.locationType,
			minNights: form.data.minNights,
			onOffer: form.data.onOffer,
			parking: form.data.parking,
			placeName: form.data.placeName,
			placeType: form.data.placeType,
			slug: form.data.slug,
			smoking: form.data.smoking,
			spaceType: form.data.spaceType,
			systemPublished: form.data.systemPublished,
			title: form.data.title,
			userPublished: form.data.userPublished
		})

		// Display a success status message
		return message(form, 'Form posted successfully!')
	}
}
