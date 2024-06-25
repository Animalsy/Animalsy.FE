export const menuCategories = [
  {
    category: "Pet Grooming",
    url: "pet-grooming",
    subcategories: [
      { name: "Spa Treatments", url: "spa-treatments" },
      { name: "Dental Care", url: "dental-care" },
      { name: "Nail Trimming", url: "nail-trimming" },
      { name: "Haircuts", url: "haircuts" },
      { name: "Bathing", url: "bathing" },
    ],
  },
  {
    category: "Veterinary Care",
    url: "veterinary-care",
    subcategories: [
      { name: "Vaccinations", url: "vaccinations" },
      { name: "Routine Check-ups", url: "routine-check-ups" },
      { name: "Emergency Care", url: "emergency-care" },
      { name: "Surgery", url: "surgery" },
      { name: "Dental Services", url: "dental-services" },
    ],
  },
  {
    category: "Pet Supplies",
    url: "pet-supplies",
    subcategories: [
      { name: "Pet Food", url: "pet-food" },
      { name: "Toys", url: "toys" },
      { name: "Bedding", url: "bedding" },
      { name: "Collars and Leashes", url: "collars-and-leashes" },
      { name: "Health Supplements", url: "health-supplements" },
    ],
  },
  {
    category: "Pet Boarding",
    url: "pet-boarding",
    subcategories: [
      { name: "Overnight Stays", url: "overnight-stays" },
      { name: "Daycare", url: "daycare" },
      { name: "Kennels and Suites", url: "kennels-and-suites" },
      { name: "Pet-Friendly Facilities", url: "pet-friendly-facilities" },
      { name: "Outdoor Play Areas", url: "outdoor-play-areas" },
    ],
  },
  {
    category: "Pet Training",
    url: "pet-training",
    subcategories: [
      { name: "Obedience Training", url: "obedience-training" },
      { name: "Puppy Training", url: "puppy-training" },
      { name: "Behaviour Modification", url: "behaviour-modification" },
      { name: "Agility Training", url: "agility-training" },
      { name: "Socialization Classes", url: "socialization-classes" },
    ],
  },
  {
    category: "Pet Sitting",
    url: "pet-sitting",
    subcategories: [
      { name: "Feeding and Watering", url: "feeding-and-watering" },
      { name: "Dog Walking", url: "dog-walking" },
      { name: "Playtime and Companionship", url: "playtime-and-companionship" },
      { name: "Litter Box Cleaning ", url: "litter-box-cleaning" },
      { name: "Medication Administration", url: "medication-administration" },
    ],
  },
  {
    category: "Pet Transport",
    url: "pet-transport",
    subcategories: [
      { name: "Local Pet Transport", url: "local-pet-transport" },
      {
        name: "Long-Distance Pet Transport",
        url: "long-distance-pet-transport",
      },
      { name: "Airport Pet Shuttle", url: "airport-pet-shuttle" },
      {
        name: "Pet-Friendly Transportation",
        url: "pet-friendly-transportation",
      },
    ],
  },
  {
    category: "Pet Health Insurance",
    url: "pet-health-insurance",
    subcategories: [
      { name: "Accident Coverage", url: "accident-coverage" },
      { name: "Illness Coverage", url: "illness-coverage" },
      { name: "Wellness Plans", url: "wellness-plans" },
      { name: "Dental Coverage", url: "dental-coverage" },
      { name: "Policy Comparisons", url: "policy-comparisons" },
    ],
  },
  {
    category: "Pet Photography",
    url: "pet-photography",
    subcategories: [
      { name: "Pet Portraits", url: "pet-portraits" },
      { name: "Event Photography", url: "event-photography" },
      { name: "Outdoor Photoshoots", url: "outdoor-photoshoots" },
      { name: "Studio Sessions", url: "studio-sessions" },
      { name: "Photo Editing Services", url: "photo-editing-services" },
    ],
  },
  {
    category: "Pet Adoption",
    url: "pet-adoption",
    subcategories: [
      {
        name: "Dogs Available for Adoption",
        url: "dogs-available-for-adoption",
      },
      {
        name: "Cats Available for Adoption",
        url: "cats-available-for-adoption",
      },
      { name: "Small Pets", url: "small-pets" },
      {
        name: "Adoption Process Information",
        url: "adoption-process-information",
      },
      { name: "Adoption Events", url: "adoption-events" },
    ],
  },
];

type Category = {
  category: string;
  subcategories: string[];
};

const category: Category = {
  category: "Pet Grooming",
  subcategories: [
    "Spa Treatments",
    "Dental Care",
    "Nail Trimming",
    "Haircuts",
    "Bathing",
  ],
};

const categorylist: Category[] = [];

categorylist.find((category) => category.category === "Pet Grooming");
const vendorlist = categorylist.filter((category) =>
  category.subcategories.includes("Bathing")
);
