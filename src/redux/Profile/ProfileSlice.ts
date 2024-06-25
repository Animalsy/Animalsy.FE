import { createSlice } from "@reduxjs/toolkit";
import { ProfileData, getProfile } from "./thunks/GetProfile.thunk";
import { updateProfile } from "./thunks/EditProfile.thunk";


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
        builder.addDefaultCase((state) => state);
    }

});
export const { getProfileStart, getProfileSuccess, getProfileFailure } = profileSlice.actions;
export default profileSlice