import { createSlice } from "@reduxjs/toolkit";
import { ProfileData, getProfile } from "./thunks/GetProfile.thunk";
import { updateProfile } from "./thunks/EditProfile.thunk";
import { postNewPetToProfile } from "./thunks/AddPet.thunk";
import { deletePetToProfile } from "./thunks/DeletePet.thunk";
import { editPetToProfile } from "./thunks/editPet.thunk";


const initialState: {
    profile: null | ProfileData,
    loading: boolean,
    error: null | any
    success: boolean
} = {
    profile: null,
    loading: false,
    error: null,
    success: false
}

// create slice for managing profile
const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        getProfileStart: (state) => {
            state.loading = true;
        },
        getProfileSuccess: (state, action) => {
            state.profile = action.payload;
            state.loading = false;
            state.error = null;
        },
        getProfileFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        // CODEPART: getProfile
        builder.addCase(getProfile.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            // @ts-ignore
            state.profile = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        // CODEPART: updateProfile
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            if (state.profile && state.profile.customer) {
                state.profile.customer = action.meta.arg;
                state.loading = false;
                state.error = null;
                state.success = true;
            }

        })
        builder.addCase(updateProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;

        })
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.error = action.payload;
        })
        // CODEPART: addPet
        builder.addCase(postNewPetToProfile.fulfilled, (state, action) => {
            if (state.profile && !state.profile?.pets) state.profile.pets = []
            if (state.profile) {
                state.profile.pets.push(action.payload);
            }
        });
        builder.addCase(postNewPetToProfile.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(postNewPetToProfile.rejected, (state, action) => {
            state.error = action.payload;
        });
        // CODEPART: deletePet
        builder.addCase(deletePetToProfile.fulfilled, (state, action) => {
            if (state.profile && state.profile.pets) {
                state.profile.pets = state.profile.pets.filter(pet => pet.id !== action.meta.arg);
            }
        });
        builder.addCase(deletePetToProfile.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(deletePetToProfile.rejected, (state, action) => {
            state.error = action.payload;
        });
        // CODEPART: editPet
        builder.addCase(editPetToProfile.fulfilled, (state, action) => {
            if (state.profile && state.profile.pets) {
                state.profile.pets = state.profile.pets.map(pet => pet.id === action.payload.id ? action.payload : pet);
                state.success = true;
            }
        })
        builder.addCase(editPetToProfile.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        builder.addCase(editPetToProfile.rejected, (state, action) => {
            state.error = action.payload;
        })


        // CODEPART: defaultCase
        builder.addDefaultCase((state) => state);
    }

});
export const { getProfileStart, getProfileSuccess, getProfileFailure } = profileSlice.actions;
export default profileSlice