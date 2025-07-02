import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 300,
    discount: 20,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Cozy forest-view cabin perfect for couples. Comes with a king-size bed, fireplace, and private hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 320,
    discount: 30,
    image: imageUrl + "cabin-002.jpg",
    description:
      "A luxury retreat nestled in the trees. Fully equipped kitchen and private deck with hot tub.",
  },
  {
    name: "003",
    maxCapacity: 3,
    regularPrice: 340,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Rustic charm with modern comfort. Ideal for a small family or trio.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Spacious cabin with separate living and sleeping areas, perfect for families.",
  },
  {
    name: "005",
    maxCapacity: 5,
    regularPrice: 550,
    discount: 75,
    image: imageUrl + "cabin-005.jpg",
    description: "Large cabin with forest-facing deck and full amenities.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 650,
    discount: 0,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Perfect for large families or small groups. Features indoor fireplace and a large spa.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 850,
    discount: 100,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Our signature large cabin for up to 8 guests. Premium interiors and chef’s kitchen.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1200,
    discount: 150,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Luxury lodge-style cabin for larger groups. Spectacular forest and mountain views.",
  },
  {
    name: "009",
    maxCapacity: 2,
    regularPrice: 280,
    discount: 10,
    image: imageUrl + "cabin-009.jpg",
    description: "Compact and comfortable, perfect for a romantic weekend.",
  },
  {
    name: "010",
    maxCapacity: 3,
    regularPrice: 300,
    discount: 25,
    image: imageUrl + "cabin-010.jpg",
    description: "Modern minimalist cabin with beautiful sunrise views.",
  },
  {
    name: "011",
    maxCapacity: 4,
    regularPrice: 420,
    discount: 0,
    image: imageUrl + "cabin-011.jpg",
    description:
      "Spacious and stylish, with panoramic windows and private jacuzzi.",
  },
  {
    name: "012",
    maxCapacity: 5,
    regularPrice: 500,
    discount: 25,
    image: imageUrl + "cabin-012.jpg",
    description:
      "Mountain retreat ideal for family getaways, includes indoor BBQ setup.",
  },
  {
    name: "013",
    maxCapacity: 6,
    regularPrice: 630,
    discount: 60,
    image: imageUrl + "cabin-013.jpg",
    description:
      "Group cabin with multiple beds, private patio, and work-desk area.",
  },
  {
    name: "014",
    maxCapacity: 7,
    regularPrice: 750,
    discount: 80,
    image: imageUrl + "cabin-014.jpg",
    description:
      "Ideal for big families with kids — outdoor swings and heated floors included.",
  },
  {
    name: "015",
    maxCapacity: 8,
    regularPrice: 880,
    discount: 120,
    image: imageUrl + "cabin-015.jpg",
    description:
      "Grand cabin with luxury decor, forest trails, and open lounge area.",
  },
  {
    name: "016",
    maxCapacity: 2,
    regularPrice: 310,
    discount: 10,
    image: imageUrl + "cabin-016.jpg",
    description: "A quiet corner of the woods just for you and a loved one.",
  },
  {
    name: "017",
    maxCapacity: 3,
    regularPrice: 330,
    discount: 15,
    image: imageUrl + "cabin-017.jpg",
    description:
      "Perfect mix of nature and comfort. Just minutes away from the lake.",
  },
  {
    name: "018",
    maxCapacity: 4,
    regularPrice: 440,
    discount: 40,
    image: imageUrl + "cabin-018.jpg",
    description: "Sun-drenched open layout with eco-friendly materials.",
  },
  {
    name: "019",
    maxCapacity: 5,
    regularPrice: 520,
    discount: 0,
    image: imageUrl + "cabin-019.jpg",
    description:
      "A full cabin with everything needed for remote work and nature healing.",
  },
  {
    name: "020",
    maxCapacity: 6,
    regularPrice: 620,
    discount: 20,
    image: imageUrl + "cabin-020.jpg",
    description:
      "Large garden, yoga deck, and peaceful pine forest all around.",
  },
  {
    name: "021",
    maxCapacity: 7,
    regularPrice: 780,
    discount: 90,
    image: imageUrl + "cabin-021.jpg",
    description:
      "Bright cabin with skylights and full surround-sound media area.",
  },
  {
    name: "022",
    maxCapacity: 8,
    regularPrice: 900,
    discount: 100,
    image: imageUrl + "cabin-022.jpg",
    description:
      "A cabin for team off-sites or celebrations — soundproofed and cozy.",
  },
  {
    name: "023",
    maxCapacity: 3,
    regularPrice: 350,
    discount: 10,
    image: imageUrl + "cabin-023.jpg",
    description:
      "A-frame cabin tucked near a small brook. Peaceful and scenic.",
  },
  {
    name: "024",
    maxCapacity: 2,
    regularPrice: 260,
    discount: 5,
    image: imageUrl + "cabin-024.jpg",
    description: "Pet-friendly hideout cabin near a hiking trail.",
  },
  {
    name: "025",
    maxCapacity: 2,
    regularPrice: 300,
    discount: 30,
    image: imageUrl + "cabin-025.jpg",
    description: "Hidden gem perfect for honeymoons. Very private and scenic.",
  },
  {
    name: "026",
    maxCapacity: 4,
    regularPrice: 480,
    discount: 35,
    image: imageUrl + "cabin-026.jpg",
    description: "Glass roof cabin ideal for stargazing and cozy evenings.",
  },
  {
    name: "027",
    maxCapacity: 6,
    regularPrice: 700,
    discount: 100,
    image: imageUrl + "cabin-027.jpg",
    description: "Spacious Scandinavian-style layout with wellness area.",
  },
  {
    name: "028",
    maxCapacity: 3,
    regularPrice: 360,
    discount: 20,
    image: imageUrl + "cabin-028.jpg",
    description:
      "Lakeside views, paddle boat access, and hammocks on the porch.",
  },
  {
    name: "029",
    maxCapacity: 2,
    regularPrice: 290,
    discount: 0,
    image: imageUrl + "cabin-029.jpg",
    description: "Sunset-facing cabin with natural stone interiors.",
  },
  {
    name: "030",
    maxCapacity: 4,
    regularPrice: 450,
    discount: 45,
    image: imageUrl + "cabin-030.jpg",
    description:
      "Warm woods, large balcony, and bookshelves stocked with nature guides.",
  },
];
