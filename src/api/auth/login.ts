import Axios, { AxiosPromise } from 'axios';
import qs from 'qs';
import * as z from 'zod';

export const loginSchema = z.union([z.literal('Ok.'), z.literal('Fails.')]);
type LoginSchema = z.infer<typeof loginSchema>;

/**
 * Build Login http request.
 * @param username
 * @param password
 * expected returns:
 * - 200, body: "Ok." -- success! the response will include a httponly cookie.
 * - 200, body: "Fails." -- no cookies for you.
 * - 403, body: "Your IP address has been banned after too many failed authentication attempts."
 */
export const login = (username: string, password: string): AxiosPromise<LoginSchema> =>
  Axios.request({
    url: 'api/v2/auth/login',
    method: 'POST',
    data: qs.stringify({ username, password }),
  });
