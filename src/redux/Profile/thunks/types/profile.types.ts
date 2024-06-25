import { PetData } from "./pet.types";

export interface ProfileData {
    customer: {
        id: string;
        userId: string;
        name: string;
        lastName: string;
        city: string;
        street: string;
        building: string;
        flat: string | null;
        postalCode: string;
        phoneNumber: string;
        emailAddress: string;
    };
    pets: PetData[];
    visits: any[];
    responseDetails: {
        key: string;
        value: string;
    }[];
}