import { AxiosError, AxiosResponse } from 'axios';
import { ZodError } from 'zod';
import { AppDispatch } from '../app/store';
import { authSlice } from '../features/auth/auth-slice';

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  if (typeof error !== 'object') return false;
  if (error === null) return false;
  return 'isAxiosError' in error;
}

interface AxiosResponseError<T> extends AxiosError<T> {
  response: AxiosResponse<T>;
}

export function isAxiosResponseError<T>(error: unknown): error is AxiosResponseError<T> {
  if (!isAxiosError<T>(error)) return false;
  return 'response' in error;
}

export const isForbidden = (err: Error): boolean => {
  if (isAxiosResponseError<string>(err) && err.response.status === 403) {
    return true;
  }
  return false;
};

export const isZodErr = (error: Error): error is ZodError => {
  if (error instanceof ZodError) {
    return true;
  }
  return false;
};

export const apiThunkErrorHandler = (error: Error, dispatch: AppDispatch) => {
  if (isForbidden(error)) {
    // encounter a 403 assume web app must request a new cookie.
    dispatch(authSlice.actions.setAuthFailure(''));
  } else if (isZodErr(error)) {
    // print out readable parse error.
    // but still throw because its unexpected/ should have been handled.
    console.log('Zod parse error.', error.message);
    throw error;
  } else {
    throw error;
  }
};
