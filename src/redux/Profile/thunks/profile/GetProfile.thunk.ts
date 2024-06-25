import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileData } from '../types/profile.types';
import { ContentApi } from '../../../../axios';





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

