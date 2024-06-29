import { createAsyncThunk } from "@reduxjs/toolkit";
import { VendorResponse, } from "..";
import { ContentApi } from "../../../../axios";
import { CreateVendor } from "../../thunks/types/vendor.types";

export const editVendorThunk = createAsyncThunk<VendorResponse, CreateVendor>(
    'profile/vendors/editVendor',
    async (data) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const userId = localStorage.getItem('userId');
            ContentApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            await ContentApi.put<string>(
                `/vendor`,
                { ...data, userId: userId }
            )
            // @ts-ignore
            const vendors = await ContentApi.get(`/vendor/${data.id}`).then(response => response.data);
            return vendors;

        } catch (error: any) {
            console.error(error.response.data)
            throw new Error('Error while fetching profile data')
        }
    }
);