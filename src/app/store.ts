import { Action, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { authSlice } from '../features/auth/auth-slice';
import { mainDataSlice } from '../features/main-data-control/main-data-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    mainData: mainDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;
