import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContentApi } from "../../../../axios";
import { VendorResponse } from "..";

export const getProfileVendors = createAsyncThunk<VendorResponse[], void>(
    'profile/vendors/getVendors',
    async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const userId = localStorage.getItem('userId');
            ContentApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            const response = await ContentApi.get<VendorResponse[]>(
                `/vendor/profiles/${userId}`
            )
            return response.data;

        } catch (error: any) {
            console.error(error.response.data)
            throw new Error('Error while fetching profile data')
        }
    }
);