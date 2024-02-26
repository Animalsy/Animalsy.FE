export interface Vendor {
  id: number;
  name: string;
  description: string;
  address: {
    city: string;
    postalCode: string;
    street: string;
    houseNumber: string;
    apartmentNumber: string;
  };
  phoneNumber: string;
  location: string;
  openingHours: OpenHours;
  services: Service[];
  reviews: Review[];
}

export interface OpenHours {
  monday: {
    open: string;
    close: string;
  };
  tuesday: {
    open: string;
    close: string;
  };
  wednesday: {
    open: string;
    close: string;
  };
  thursday: {
    open: string;
    close: string;
  };
  friday: {
    open: string;
    close: string;
  };
  saturday: {
    open: string;
    close: string;
  };
  sunday: {
    open: string;
    close: string;
  };
}
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  includes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  discount?: number;
  performers: Performer[];
  durationMin: number;
}

export interface Performer {
  firstName: string;
  lastName: string;
  photo?: string;
  visits?: Visit[];
}

export interface Visit {
  date: string;
  vendorId: string;
  performerId: string;
  clientId: string;
  petId: string;
  serviceId: string;
  confirmed: boolean;
  rating?: {
    comment: string;
    rating: number;
  };
}

export interface Review {
  stars: number;
  comment: string;
}

export interface ClientProfile {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  pets: Pet[];
  visits: Visit[];
}

export interface Pet {
  species: Species;
  breed: string;
  name: string;
  dateOfBirth: string;
  photo?: string;
}

export interface VendorProfile {
  name: string;
  nip: string;
  address: string;
  phoneNumber: string;
  email: string;
  location: string;
  services: Service[];
  performers: Performer[];
  pendingVisits: Visit[];
}

enum Species {
  Dog = "Dog",
  Cat = "Cat",
  Bird = "Bird",
  // Add more species here
}

export interface ServiceCategory {
  id: string;
  name: string;
}

export interface ServiceSubCategory {
  id: string;
  name: string;
  categoryId: string;
}
