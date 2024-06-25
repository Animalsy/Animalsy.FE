import { createAsyncThunk } from "@reduxjs/toolkit";
import { PetData, } from "./GetProfile.thunk";
import { ContentApi } from "../../../axios";

export const postNewPetToProfile = createAsyncThunk<PetData, PetData>(
    "profile/addPet",
    async (profileData, { rejectWithValue }) => {
        try {
            const newPetId = await ContentApi.post<string>(
                `/pet`,
                profileData
            ).then(response => response.data);

            return await ContentApi.get<PetData>(
                `/pet/${newPetId}`
            ).then(response => response.data);
        } catch (error: any) {
            return rejectWithValue(error.response.data.errors.flatMap((error: any) => error.errorMessage).join('\n'));
        }
    }
)