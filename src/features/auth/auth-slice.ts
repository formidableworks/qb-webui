import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
  isAuthorised: boolean;
  errorText: string;
}

const initialState: AuthSlice = {
  isAuthorised: true,
  errorText: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthSuccess: (state) => {
      state.isAuthorised = true;
      state.errorText = '';
    },
    setAuthFailure: (state, action: PayloadAction<string>) => {
      state.isAuthorised = false;
      state.errorText = action.payload;
    },
  },
});
