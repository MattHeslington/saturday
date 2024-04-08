import { z } from 'zod'

export const generalInfoSchema = z.object({
	name: z.string(),
	title: z.string(),
	placeType: z.string(),
	spaceType: z.string(),
	highlights: z.string().array(),
	specialLocation: z.string(),
	amSpecial: z.string().array(),
	amStandard: z.string().array(),
	bedrooms: z.number(),
	beds: z.number(),
	bathrooms: z.number(),
	guests: z.number(),
	checkIn: z.string().time(),
	checkOut: z.string().time(),
	smoking: z.boolean(),
	events: z.boolean(),
	parking: z.boolean(),
	description: z.string(),
	locale: z.string()
})
