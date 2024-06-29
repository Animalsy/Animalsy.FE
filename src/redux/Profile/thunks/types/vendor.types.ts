import * as yup from 'yup';

export interface Vendor {
    id: string,
    userId: string,
    name: string,
    nip: string,
    city: string,
    street: string,
    building: string,
    flat: string,
    postalCode: string,
    phoneNumber: string,
    emailAddress: string,
    openingHour: string,
    closingHour: string,
}

export type CreateVendor = Omit<Vendor, 'id'>;
export type UpdateVendor = Partial<Vendor>;

export const vendorSchema = yup.object().shape({
    id: yup.string(),
    userId: yup.string(),
    name: yup.string().required('Name is required.'),
    nip: yup.string().required('NIP is required.').matches(/^[0-9]{10}$/, 'NIP must be a 10-digit number.'),
    city: yup.string().required('City is required.'),
    street: yup.string().required('Street is required.'),
    building: yup.string().required('Building number is required.').matches(/^[0-9]+$/, 'Building number must contain only digits.'),
    flat: yup.string().matches(/^[0-9]$/, 'Flat number must be a single digit.').max(5, 'Flat number cannot exceed 5 characters.'),
    postalCode: yup.string().required('Postal code is required.').matches(/^[0-9]{2}-[0-9]{3}$/, 'Postal code must be in the format XX-XXX.'),
    phoneNumber: yup.string().required('Phone number is required.').matches(/^[0-9]{9}$/, 'Phone number must be a 9-digit number.'),
    emailAddress: yup.string().email('Invalid email address.').required('Email address is required.'),
    openingHour: yup.string().required('Opening hour is required.').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, 'Invalid opening hour format. Use hh:mm:ss.'),
    closingHour: yup.string().required('Closing hour is required.').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, 'Invalid closing hour format. Use hh:mm:ss.'),
});

export const initialStateCreateVendor: CreateVendor = {
    "userId": "d995433e-f36b-1410-833b-004edbfd4f77",
    "name": "test vendor",
    "nip": "123456789",
    "city": "Krakow",
    "street": "udk",
    "building": "12",
    "flat": "1",
    "postalCode": "32-333",
    "phoneNumber": "787332232",
    "emailAddress": "karolcodetest@gmail.com",
    "openingHour": "12:00:00",
    "closingHour": "22:00:00"
};

const isValidVendor = async (vendor: CreateVendor): Promise<boolean> => {
    try {
        await vendorSchema.validate(vendor);
        return true;
    } catch (error) {
        return false;
    }
};

const validateVendor = async (vendor: CreateVendor): Promise<string[]> => {
    try {
        await vendorSchema.validate(vendor);
        return [];
    } catch (error: any) {
        return error.errors;
    }
};

// Usage example:
const vendor: CreateVendor = {
    userId: "d995433e-f36b-1410-833b-004edbfd4f77",
    name: "test vendor",
    nip: "123456789",
    city: "Krakow",
    street: "udk",
    building: "12",
    flat: "1",
    postalCode: "32-333",
    phoneNumber: "787332232",
    emailAddress: "karolcodetest@gmail.com",
    openingHour: "12:00:00",
    closingHour: "22:00:00",
};

isValidVendor(vendor).then((isValid) => {
    console.log(isValid); // true
});

validateVendor(vendor).then((errors) => {
    console.log(errors); // []
});