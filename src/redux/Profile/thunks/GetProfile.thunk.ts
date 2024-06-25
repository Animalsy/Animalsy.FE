import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContentApi } from '../../../axios';

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
    pets: any[];
    visits: any[];
    responseDetails: {
        key: string;
        value: string;
    }[];
}

export const getProfile = createAsyncThunk<ProfileData, void>(
    'profile/getProfile',
    async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const userId = localStorage.getItem('userId');
            ContentApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            const response = await ContentApi.get<ProfileData>(
                `/customer/profile/${userId}`
            )
            return response.data;

        } catch (error: any) {
            console.error(error.response.data)
            throw new Error('Error while fetching profile data')
        }
    }
);

