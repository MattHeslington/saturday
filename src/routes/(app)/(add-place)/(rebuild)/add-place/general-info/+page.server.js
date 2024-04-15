import { schema } from './schema'
import { superValidate } from 'sveltekit-superforms'
import { fetchData } from '$lib/utils/fetchData'
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
		console.log('FORM:', form.data)

		// TODO: Do something with the validated form.data

		await fetchData('https://apix.ultimatevillas.workers.dev/api/listings/update/general-info', 'POST', {
			name: form.data.placeName || null,
			title: form.data.title || null,
			place_type: form.data.placeType || null,
			space_type: form.data.spaceType || null,
			highlights: form.data.highlights || null,
			am_standard: form.data.amStandard || null,
			am_special: form.data.amSpecial || null,
			bedrooms: form.data.bedrooms || null,
			beds: form.data.beds || null,
			bathrooms: form.data.bathrooms || null,
			guests: form.data.guests || null,
			checkin_time: form.data.checkIn || null,
			checkout_time: form.data.checkOut || null,
			smoking: form.data.smoking || null,
			events: form.data.events || null,
			parking: form.data.parking || null,
			description: form.data.description || null,
			locale: form.data.locale || null

			// 	owner_id: form.data.ownerId,
			// 	base_price: form.data.basePrice,
			// 	cleaning_fee: form.data.cleaningFee,
			// 	complete: form.data.complete,
			// 	featured: form.data.featured,
			// 	ical_files: form.data.icalFiles,
			// 	ical_links: form.data.icalLinks,
			// 	location_type: form.data.locationType,
			// 	min_nights: form.data.minNights,
			// 	on_offer: form.data.onOffer,
			// 	slug: form.data.slug,
			// 	system_published: form.data.systemPublished,
			// 	user_published: form.data.userPublished
		})

		return { form }
	}
}
