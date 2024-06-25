import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContentApi } from "../../../axios";

export const deletePetToProfile = createAsyncThunk<string, string>(
    "profile/deletePet",
    async (profileData, { rejectWithValue }) => {
        try {
            const newPetId = await ContentApi.delete<string>(
                `/pet/${profileData}`,
            ).then(response => response.data);
            return newPetId;
        } catch (error: any) {
            return rejectWithValue(error.response.data.errors.flatMap((error: any) => error.errorMessage).join('\n'));
        }
    }
)