import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContentApi } from "../../../axios";
import { PetData } from "./GetProfile.thunk";

export const editPetToProfile = createAsyncThunk<PetData, PetData>(
    "profile/editPet",
    async (profileData, { rejectWithValue }) => {
        try {
            await ContentApi.put<string>(
                `/pet`, profileData
            ).then(response => response.data);
            const pet = await ContentApi.get<PetData>(`/pet/${profileData.id}`).then(response => response.data);
            return pet;
        } catch (error: any) {
            console.error(error.response.data)
            return rejectWithValue(error.response.data.errors.flatMap((error: any) => error.errorMessage).join('\n'));
        }
    }
)