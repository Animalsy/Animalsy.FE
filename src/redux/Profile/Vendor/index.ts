import { createSlice, } from '@reduxjs/toolkit';
import { deleteSingleVendor, getProfileVendors, getSingleVendor } from './thunk/getVendors';
import { Vendor } from '../thunks/types/vendor.types';
import { createVndorThunk } from './thunk/createVendor';
import { editVendorThunk } from './thunk/editVendor.thunk';


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
    lastVendor?: VendorResponse;
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

    },
    extraReducers: (builder) => {
        builder.addCase(getProfileVendors.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        builder.addCase(getProfileVendors.fulfilled, (state, action) => {

            state.data = action.payload;
            state.loading = false;
            state.error = null;
            state.success = true;
        })
        builder.addCase(getProfileVendors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        })
        builder.addCase(createVndorThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        builder.addCase(createVndorThunk.fulfilled, (state, action) => {
            state.data = (action.payload);
            state.loading = false;
            state.error = null;
        })
        builder.addCase(createVndorThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });

        builder.addCase(editVendorThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        builder.addCase(editVendorThunk.fulfilled, (state, action) => {
            state.lastVendor = (action.payload);
            state.loading = false;
            state.error = null;
        })
        builder.addCase(editVendorThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        })
        builder.addCase(getSingleVendor.fulfilled, (state, action) => {
            state.lastVendor = action.payload;
            state.loading = false;
            state.error = null;
            state.success = true;
        })
        builder.addCase(deleteSingleVendor.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.success = false;
        })
    },
});

export const { actions, reducer } = vendorSlice;
export default reducer;