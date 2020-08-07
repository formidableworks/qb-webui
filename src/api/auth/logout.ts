import Axios, { AxiosPromise } from 'axios';

export const logout = (): AxiosPromise<void> =>
  Axios({
    url: 'api/v2/auth/logout',
    method: 'POST',
  });
