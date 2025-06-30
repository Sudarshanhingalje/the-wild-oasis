import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

// export const cabins = [
//   {
//     name: "001",
//     maxCapacity: 2,
//     regularPrice: 250,
//     discount: 0,
//     image: imageUrl + "cabin-001.jpg",
//     description:
//       "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   },
//   {
//     name: "002",
//     maxCapacity: 2,
//     regularPrice: 350,
//     discount: 25,
//     image: imageUrl + "cabin-002.jpg",
//     description:
//       "Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
//   },
//   {
//     name: "003",
//     maxCapacity: 4,
//     regularPrice: 300,
//     discount: 0,
//     image: imageUrl + "cabin-003.jpg",
//     description:
//       "Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
//   },
//   {
//     name: "004",
//     maxCapacity: 4,
//     regularPrice: 500,
//     discount: 50,
//     image: imageUrl + "cabin-004.jpg",
//     description:
//       "Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
//   },
//   {
//     name: "005",
//     maxCapacity: 6,
//     regularPrice: 350,
//     discount: 0,
//     image: imageUrl + "cabin-005.jpg",
//     description:
//       "Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
//   },
//   {
//     name: "006",
//     maxCapacity: 6,
//     regularPrice: 800,
//     discount: 100,
//     image: imageUrl + "cabin-006.jpg",
//     description:
//       "Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
//   },
//   {
//     name: "007",
//     maxCapacity: 8,
//     regularPrice: 600,
//     discount: 100,
//     image: imageUrl + "cabin-007.jpg",
//     description:
//       "Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
//   },
//   {
//     name: "008",
//     maxCapacity: 10,
//     regularPrice: 1400,
//     discount: 0,
//     image: imageUrl + "cabin-008.jpg",
//     description:
//       "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
//   },
// ];

// export const cabins = [
//   {
//     name: "001",
//     maxCapacity: 2,
//     regularPrice: 450,
//     discount: 50,
//     image: imageUrl + "cabin-001.jpg",
//     description:
//       "Perched on a quiet hillside, Cabin 001 offers an intimate escape for couples seeking tranquility and luxury. The elegant wooden interiors blend modern design with rustic charm. A king-size bed, spa-inspired bathroom, and private deck with forest views make this a true romantic haven. Enjoy evenings by the fireplace or a starlit soak in the outdoor hot tub.",
//   },
//   {
//     name: "002",
//     maxCapacity: 4,
//     regularPrice: 520,
//     discount: 0,
//     image: imageUrl + "cabin-002.jpg",
//     description:
//       "Cabin 002 is ideal for small families or friends who want to explore nature without sacrificing comfort. With two bedrooms, a cozy lounge, and a full gourmet kitchen, you’ll feel right at home. Floor-to-ceiling windows flood the space with natural light and offer breathtaking mountain views. Unwind in the private hot tub surrounded by whispering pines.",
//   },
//   {
//     name: "003",
//     maxCapacity: 6,
//     regularPrice: 690,
//     discount: 80,
//     image: imageUrl + "cabin-003.jpg",
//     description:
//       "Designed for luxury group getaways, Cabin 003 features three plush bedrooms, two baths, and a spacious open-concept living area. Sophisticated wooden craftsmanship enhances the cabin’s upscale aesthetic. Guests can cook together in the chef’s kitchen or relax by the stone fireplace. Outside, enjoy BBQs on the deck and soak in panoramic nature views.",
//   },
//   {
//     name: "004",
//     maxCapacity: 2,
//     regularPrice: 500,
//     discount: 20,
//     image: imageUrl + "cabin-004.jpg",
//     description:
//       "Cabin 004 is a premium suite-style cabin crafted for couples. Soft ambient lighting, heated floors, and natural textures create a peaceful vibe inside. The marble bathroom includes a soaking tub and rain shower. Spend your evenings on the deck sipping wine as the sun sets over the horizon.",
//   },
//   {
//     name: "005",
//     maxCapacity: 5,
//     regularPrice: 620,
//     discount: 30,
//     image: imageUrl + "cabin-005.jpg",
//     description:
//       "Perfectly positioned near the lakeside, Cabin 005 combines outdoor living with luxurious interiors. The wraparound windows and vaulted ceilings create a sense of openness. Features include a media lounge, fireplace, and tech-enabled kitchen. A private fire pit and hammock area complete the outdoor vibe.",
//   },
//   {
//     name: "006",
//     maxCapacity: 4,
//     regularPrice: 580,
//     discount: 0,
//     image: imageUrl + "cabin-006.jpg",
//     description:
//       "Cabin 006 boasts premium finishes and warm, Scandinavian-inspired interiors. Two spacious bedrooms and an open-plan kitchen-dining area make it ideal for families. The deck includes a covered jacuzzi with ambient lighting. Enjoy curated welcome baskets and complimentary local wine.",
//   },
//   {
//     name: "007",
//     maxCapacity: 8,
//     regularPrice: 850,
//     discount: 100,
//     image: imageUrl + "cabin-007.jpg",
//     description:
//       "Designed for larger groups, Cabin 007 features four bedrooms, a game room, and a professional kitchen. Interiors are crafted from rich cedar and stone for a grounded, earthy feel. A loft-style mezzanine adds extra sleeping space. Outside, enjoy a hot tub, grill station, and hammock garden.",
//   },
//   {
//     name: "008",
//     maxCapacity: 10,
//     regularPrice: 1200,
//     discount: 200,
//     image: imageUrl + "cabin-008.jpg",
//     description:
//       "Cabin 008 is the crown jewel of the property — a grand estate cabin for the ultimate retreat. With five bedrooms, three baths, and a luxury dining hall, it’s perfect for reunions or celebrations. Custom lighting, sound systems, and fireplaces in every room set a high standard. The vast outdoor deck includes a sunken spa, lounge seating, and sweeping valley views.",
//   },
//   {
//     name: "009",
//     maxCapacity: 3,
//     regularPrice: 480,
//     discount: 30,
//     image: imageUrl + "cabin-009.jpg",
//     description:
//       "Nestled near a serene creek, Cabin 009 offers an artistic and cozy retreat for small families or couples with a child. It features bohemian interiors with handcrafted furniture, a reading loft, and a private meditation corner. Nature lovers will enjoy the nearby hiking trails and in-cabin birdwatching kits.",
//   },
//   {
//     name: "010",
//     maxCapacity: 6,
//     regularPrice: 700,
//     discount: 50,
//     image: imageUrl + "cabin-010.jpg",
//     description:
//       "Cabin 010 blends comfort and elegance in a forested setting, with three bedrooms and a spacious lounge. The large windows provide all-day sunlight and forest views. Amenities include an outdoor hot tub, hammock deck, and a full kitchen with espresso machine. Ideal for families seeking nature without compromise.",
//   },
// ];
