import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContentApi } from "../../../../axios";
import { ProfileData } from "../types/profile.types";

export const updateProfile = createAsyncThunk<ProfileData['customer'], ProfileData["customer"]>(
    "profile/updateProfile",
    async (profileData, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            ContentApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            await ContentApi.put<ProfileData>(
                `/customer`,
                profileData
            )
            return profileData;
        } catch (error: any) {
            return rejectWithValue(error.response.data.errors.flatMap((error: any) => error.errorMessage).join('\n'));
        }
    }
)