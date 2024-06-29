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

// get single vendor
export const getSingleVendor = createAsyncThunk<VendorResponse, string>(
    'profile/vendors/getSingleVendor',
    async (vendorId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            ContentApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            const response = await ContentApi.get<VendorResponse>(
                `/vendor/${vendorId}`
            )
            return response.data;

        } catch (error: any) {
            console.error(error.response.data)
            throw new Error('Error while fetching profile data')
        }
    }
);

// delete single vendor
export const deleteSingleVendor = createAsyncThunk<VendorResponse[], string>(
    'profile/vendors/deleteSingleVendor',
    async (vendorId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            ContentApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            await ContentApi.delete<VendorResponse>(
                `/vendor/${vendorId}`
            )
            const vendors = await ContentApi.get<VendorResponse[]>(`/vendor/profiles/${localStorage.getItem('userId')}`).then(response => response.data);
            return vendors;

        } catch (error: any) {
            console.error(error.response.data)
            throw new Error('Error while fetching profile data')
        }
    }
);