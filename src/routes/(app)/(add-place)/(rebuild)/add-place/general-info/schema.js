import { z } from 'zod'

export const placeTypes = ['villa', 'house', 'apartment', 'boutique-hotel', 'bed-and-breakfast', 'guest-house', 'unique-space']
export const spaceTypes = ['entire-place', 'private-room', 'shared-room']
export const highlights = ['peaceful', 'unique', 'family-friendly', 'stylish', 'central', 'spacious', 'instagrammable']
export const amenitiesStandard = [
	'wifi',
	'tv',
	'swimming-pool',
	'air-conditioning',
	'streaming-service',
	'sound-system',
	'games-console',
	'washing-machine',
	'microwave',
	'iron',
	'hair-dryer',
	'cot-crib',
	'high-chair',
	'pool-fence',
	'bicycles',
	'safe',
	'surf-boards',
	'laundry-service'
]
export const amenitiesSpecial = [
	'breakfasts',
	'housekeeping',
	'chef',
	'butler',
	'property-manager',
	'security-staff',
	'car-and-driver',
	'gym-equipment',
	'pool-table',
	'barbecue',
	'jacuzzi',
	'welcome-drinks'
]

export const schema = z.object({
	name: z.string(),
	title: z.string(),
	placeType: z.enum(placeTypes).default('villa'),
	spaceType: z.enum(spaceTypes).default('entire-place'),
	highlights: z
		.array(z.enum(highlights))
		.min(1, 'You must select at least one highlight.')
		.max(3, 'You can only select up to three highlights.'),
	specialLocation: z.string(),
	amSpecial: z.array(z.enum(amenitiesSpecial)),
	amStandard: z.array(z.enum(amenitiesStandard)),
	bedrooms: z.number(),
	beds: z.number(),
	bathrooms: z.number(),
	guests: z.number(),
	checkIn: z.string(),
	checkOut: z.string(),
	smoking: z.boolean(),
	events: z.boolean(),
	parking: z.boolean(),
	description: z.string(),
	locale: z.string()
})
