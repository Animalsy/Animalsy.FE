import { createSlice, } from '@reduxjs/toolkit';
import { getProfileVendors } from './thunk/getVendors';
import { Vendor } from '../thunks/types/vendor.types';
import { createVndorThunk } from './thunk/createVendor';


export type ResponseDetails = { [key: string]: string }
export interface VendorResponse {
    vendor?: Vendor,
    visits?: any[],
    contractors?: any[],
    responseDetails?: ResponseDetails[]
}
export interface VendorState {
    success: boolean;
    loading: boolean;
    error: null | any;
    data: VendorResponse[];
}

const initialState: VendorState = {
    success: false,
    loading: false,
    error: undefined,
    data: []
};

const vendorSlice = createSlice({
    name: 'vendorData',
    initialState,
    reducers: {
        // Define your actions and reducers here
    },
    extraReducers: (builder) => {
        builder.addCase(getProfileVendors.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        }),
            builder.addCase(getProfileVendors.fulfilled, (state, action) => {

                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.success = true;
            }),
            builder.addCase(getProfileVendors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            });
        builder.addCase(createVndorThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        }),
            builder.addCase(createVndorThunk.fulfilled, (state, action) => {
                state.data = (action.payload);
                state.loading = false;
                state.error = null;
                window.location.reload();
            })
    },
});

export const { actions, reducer } = vendorSlice;
export default reducer;