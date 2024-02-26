import { Service, Vendor } from "../types/vendor";
export const vendorServicesListStatic: Service[] = [
  {
    id: "1",
    title: "Spa Treatments - Pet Grooming",
    description: "Luxurious spa treatments for your beloved pets.",
    category: "Pet Grooming",
    subcategory: "Spa Treatments",
    includes: ["Bath", "Massage", "Brushing"],
    priceRange: { min: 50, max: 100 },
    performers: [],
    durationMin: 60,
  },
  {
    id: "2",
    title: "Dental Care - Pet Grooming",
    description: "Professional dental care services for pets.",
    category: "Pet Grooming",
    subcategory: "Dental Care",
    includes: ["Teeth Cleaning", "Oral Examination"],
    priceRange: { min: 80, max: 150 },
    performers: [],
    durationMin: 45,
  },
  // Veterinary Care
  {
    id: "3",
    title: "Vaccinations - Veterinary Care",
    description: "Essential vaccinations for your pets.",
    category: "Veterinary Care",
    subcategory: "Vaccinations",
    includes: ["General Check-up", "Vaccination Shots"],
    priceRange: { min: 30, max: 80 },
    performers: [],
    durationMin: 30,
  },
  {
    id: "4",
    title: "Routine Check-ups - Veterinary Care",
    description: "Regular check-ups to ensure your pet's well-being.",
    category: "Veterinary Care",
    subcategory: "Routine Check-ups",
    includes: ["Physical Examination", "Parasite Screening"],
    priceRange: { min: 50, max: 100 },
    performers: [],
    durationMin: 45,
  },
  // Pet Supplies
  {
    id: "5",
    title: "Pet Food - Pet Supplies",
    description: "High-quality pet food for optimal nutrition.",
    category: "Pet Supplies",
    subcategory: "Pet Food",
    includes: ["Dry Food", "Canned Food", "Treats"],
    priceRange: { min: 10, max: 50 },
    performers: [],
    durationMin: 0,
  },
  {
    id: "6",
    title: "Toys - Pet Supplies",
    description: "Fun toys to keep your pet entertained.",
    category: "Pet Supplies",
    subcategory: "Toys",
    includes: ["Chew Toys", "Interactive Toys"],
    priceRange: { min: 5, max: 30 },
    performers: [],
    durationMin: 0,
  },
  {
    id: "7",
    title: "Overnight Stays - Pet Boarding",
    description: "Comfortable overnight stays for your pets.",
    category: "Pet Boarding",
    subcategory: "Overnight Stays",
    includes: ["Private Room", "Regular Exercise"],
    priceRange: { min: 30, max: 80 },
    performers: [],
    durationMin: 12 * 60, // 12 hours
  },
  {
    id: "8",
    title: "Daycare - Pet Boarding",
    description: "Safe and engaging daycare services for pets.",
    category: "Pet Boarding",
    subcategory: "Daycare",
    includes: ["Supervised Playtime", "Socialization"],
    priceRange: { min: 20, max: 50 },
    performers: [],
    durationMin: 8 * 60, // 8 hours
  },
  // Pet Training
  {
    id: "9",
    title: "Obedience Training - Pet Training",
    description: "Effective obedience training to improve your pet's behavior.",
    category: "Pet Training",
    subcategory: "Obedience Training",
    includes: ["Basic Commands", "Leash Training"],
    priceRange: { min: 60, max: 120 },
    performers: [],
    durationMin: 60,
  },
  {
    id: "10",
    title: "Puppy Training - Pet Training",
    description: "Specialized training tailored for young puppies.",
    category: "Pet Training",
    subcategory: "Puppy Training",
    includes: ["Potty Training", "Socialization"],
    priceRange: { min: 70, max: 130 },
    performers: [],
    durationMin: 60,
  },
];

export const vendorListStatic: Vendor[] = [
  {
    id: 1,
    name: "Vendor 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id error repudiandae vitae minima, qui nostrum accusantium facere sunt fuga.",
    address: {
      city: "City 1",
      postalCode: "12345",
      street: "Street 1",
      houseNumber: "1",
      apartmentNumber: "A",
    },
    phoneNumber: "1234567890",
    location: "Location 1",
    openingHours: {
      monday: {
        open: "9am",
        close: "5pm",
      },
      tuesday: {
        open: "9am",
        close: "5pm",
      },
      wednesday: {
        open: "9am",
        close: "5pm",
      },
      thursday: {
        open: "9am",
        close: "5pm",
      },
      friday: {
        open: "9am",
        close: "5pm",
      },
      saturday: {
        open: "9am",
        close: "5pm",
      },
      sunday: {
        open: "9am",
        close: "5pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 2,
    name: "Vendor 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque, expedita vero soluta inventore alias assumenda quidem suscipit quas iure deleniti quisquam fuga autem voluptatum eaque velit ab incidunt aperiam? Rerum necessitatibus quo obcaecati sed vitae exercitationem? Ullam, numquam ratione.",
    address: {
      city: "City 2",
      postalCode: "23456",
      street: "Street 2",
      houseNumber: "2",
      apartmentNumber: "B",
    },
    phoneNumber: "2345678901",
    location: "Location 2",
    openingHours: {
      monday: {
        open: "10am",
        close: "6pm",
      },
      tuesday: {
        open: "10am",
        close: "6pm",
      },
      wednesday: {
        open: "10am",
        close: "6pm",
      },
      thursday: {
        open: "10am",
        close: "6pm",
      },
      friday: {
        open: "10am",
        close: "6pm",
      },
      saturday: {
        open: "10am",
        close: "6pm",
      },
      sunday: {
        open: "10am",
        close: "6pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 3,
    name: "Vendor 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur doloremque temporibus repellendus aliquam minus error earum, quidem iste numquam.",
    address: {
      city: "City 3",
      postalCode: "34567",
      street: "Street 3",
      houseNumber: "3",
      apartmentNumber: "C",
    },
    phoneNumber: "3456789012",
    location: "Location 3",
    openingHours: {
      monday: {
        open: "11am",
        close: "7pm",
      },
      tuesday: {
        open: "11am",
        close: "7pm",
      },
      wednesday: {
        open: "11am",
        close: "7pm",
      },
      thursday: {
        open: "11am",
        close: "7pm",
      },
      friday: {
        open: "11am",
        close: "7pm",
      },
      saturday: {
        open: "11am",
        close: "7pm",
      },
      sunday: {
        open: "11am",
        close: "7pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 4,
    name: "Vendor 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 4",
      postalCode: "45678",
      street: "Street 4",
      houseNumber: "4",
      apartmentNumber: "D",
    },
    phoneNumber: "4567890123",
    location: "Location 4",
    openingHours: {
      monday: {
        open: "12pm",
        close: "8pm",
      },
      tuesday: {
        open: "12pm",
        close: "8pm",
      },
      wednesday: {
        open: "12pm",
        close: "8pm",
      },
      thursday: {
        open: "12pm",
        close: "8pm",
      },
      friday: {
        open: "12pm",
        close: "8pm",
      },
      saturday: {
        open: "12pm",
        close: "8pm",
      },
      sunday: {
        open: "12pm",
        close: "8pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 5,
    name: "Vendor 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 5",
      postalCode: "56789",
      street: "Street 5",
      houseNumber: "5",
      apartmentNumber: "E",
    },
    phoneNumber: "5678901234",
    location: "Location 5",
    openingHours: {
      monday: {
        open: "1pm",
        close: "9pm",
      },
      tuesday: {
        open: "1pm",
        close: "9pm",
      },
      wednesday: {
        open: "1pm",
        close: "9pm",
      },
      thursday: {
        open: "1pm",
        close: "9pm",
      },
      friday: {
        open: "1pm",
        close: "9pm",
      },
      saturday: {
        open: "1pm",
        close: "9pm",
      },
      sunday: {
        open: "1pm",
        close: "9pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 6,
    name: "Vendor 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 6",
      postalCode: "67890",
      street: "Street 6",
      houseNumber: "6",
      apartmentNumber: "F",
    },
    phoneNumber: "6789012345",
    location: "Location 6",
    openingHours: {
      monday: {
        open: "2pm",
        close: "10pm",
      },
      tuesday: {
        open: "2pm",
        close: "10pm",
      },
      wednesday: {
        open: "2pm",
        close: "10pm",
      },
      thursday: {
        open: "2pm",
        close: "10pm",
      },
      friday: {
        open: "2pm",
        close: "10pm",
      },
      saturday: {
        open: "2pm",
        close: "10pm",
      },
      sunday: {
        open: "2pm",
        close: "10pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 7,
    name: "Vendor 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 7",
      postalCode: "78901",
      street: "Street 7",
      houseNumber: "7",
      apartmentNumber: "G",
    },
    phoneNumber: "7890123456",
    location: "Location 7",
    openingHours: {
      monday: {
        open: "3pm",
        close: "11pm",
      },
      tuesday: {
        open: "3pm",
        close: "11pm",
      },
      wednesday: {
        open: "3pm",
        close: "11pm",
      },
      thursday: {
        open: "3pm",
        close: "11pm",
      },
      friday: {
        open: "3pm",
        close: "11pm",
      },
      saturday: {
        open: "3pm",
        close: "11pm",
      },
      sunday: {
        open: "3pm",
        close: "11pm",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 8,
    name: "Vendor 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 8",
      postalCode: "89012",
      street: "Street 8",
      houseNumber: "8",
      apartmentNumber: "H",
    },
    phoneNumber: "8901234567",
    location: "Location 8",
    openingHours: {
      monday: {
        open: "4pm",
        close: "12am",
      },
      tuesday: {
        open: "4pm",
        close: "12am",
      },
      wednesday: {
        open: "4pm",
        close: "12am",
      },
      thursday: {
        open: "4pm",
        close: "12am",
      },
      friday: {
        open: "4pm",
        close: "12am",
      },
      saturday: {
        open: "4pm",
        close: "12am",
      },
      sunday: {
        open: "4pm",
        close: "12am",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 9,
    name: "Vendor 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 9",
      postalCode: "90123",
      street: "Street 9",
      houseNumber: "9",
      apartmentNumber: "I",
    },
    phoneNumber: "9012345678",
    location: "Location 9",
    openingHours: {
      monday: {
        open: "5pm",
        close: "1am",
      },
      tuesday: {
        open: "5pm",
        close: "1am",
      },
      wednesday: {
        open: "5pm",
        close: "1am",
      },
      thursday: {
        open: "5pm",
        close: "1am",
      },
      friday: {
        open: "5pm",
        close: "1am",
      },
      saturday: {
        open: "5pm",
        close: "1am",
      },
      sunday: {
        open: "5pm",
        close: "1am",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },
  {
    id: 10,
    name: "Vendor 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi aliquid debitis ratione praesentium alias doloribus dolorum a labore veritatis!",
    address: {
      city: "City 10",
      postalCode: "01234",
      street: "Street 10",
      houseNumber: "10",
      apartmentNumber: "J",
    },
    phoneNumber: "0123456789",
    location: "Location 10",
    openingHours: {
      monday: {
        open: "6pm",
        close: "2am",
      },
      tuesday: {
        open: "6pm",
        close: "2am",
      },
      wednesday: {
        open: "6pm",
        close: "2am",
      },
      thursday: {
        open: "6pm",
        close: "2am",
      },
      friday: {
        open: "6pm",
        close: "2am",
      },
      saturday: {
        open: "6pm",
        close: "2am",
      },
      sunday: {
        open: "6pm",
        close: "2am",
      },
    },
    services: vendorServicesListStatic,
    reviews: [],
  },

  // Add more vendors here...
];
