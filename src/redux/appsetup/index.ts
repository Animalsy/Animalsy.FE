import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppSetupState {
    isLoading: boolean;
    error: string | null;
    isLoginModalOpen: boolean;
    // Add more state properties as needed
}

const initialState: AppSetupState = {
    isLoading: false,
    error: null,
    isLoginModalOpen: false,
};

const appSetupSlice = createSlice({
    name: 'appSetup',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setIsModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isLoginModalOpen = action.payload;
        }
        // Add more reducers as needed
    },
});

export const { setLoading, setError, setIsModalOpen } = appSetupSlice.actions;

export default appSetupSlice.reducer;