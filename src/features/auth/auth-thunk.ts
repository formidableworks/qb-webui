import { login, loginSchema } from '../../api/auth/login';
import { logout } from '../../api/auth/logout';
import { isForbidden } from '../../api/common';
import { AppThunk, RootState } from '../../app/store';
import { authSlice } from './auth-slice';

const { setAuthFailure, setAuthSuccess } = authSlice.actions;

export const loginThunk = (username: string, password: string): AppThunk => async (dispatch) => {
  try {
    const response = await login(username, password);
    const data = loginSchema.parse(response.data);
    if (data === 'Ok.') {
      dispatch(setAuthSuccess());
    } else {
      dispatch(setAuthFailure('Invalid credentials.'));
    }
  } catch (error) {
    if (isForbidden(error)) {
      dispatch(setAuthFailure('Too many failed attempts.'));
    } else {
      throw error;
    }
  }
};

export const logoutThunk = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    await logout();
    dispatch(setAuthFailure(''));
    // TODO: implement a redux state reset.
  } catch (error) {
    if (isForbidden(error)) {
      dispatch(setAuthFailure(''));
    } else {
      throw error;
    }
  }
};

export const selectIsAuthorised = (state: RootState): boolean => state.auth.isAuthorised;
export const selectErrorText = (state: RootState): string => state.auth.errorText;
