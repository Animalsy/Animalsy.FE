export interface PetData {
    userId: string,
    species: string,
    race: string,
    name: string,
    dateOfBirth: string,
    imageUrl: string
    id: string
}

export const initialPetData: PetData = {
    id: '',
    userId: '',
    species: '',
    race: '',
    name: '',
    dateOfBirth: "",
    imageUrl: ''
}