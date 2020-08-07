import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from 'react-use';
import { selectIsAuthorised } from '../auth/auth-thunk';
import { selectRequestId } from './main-data-selectors';
import { mainDataThunk } from './main-data-thunk';

export const MainDataTimer = (): JSX.Element => {
  const dispatch = useDispatch();
  const authRequired = !useSelector(selectIsAuthorised);
  const requestId = useSelector(selectRequestId);

  useInterval(
    () => {
      dispatch(mainDataThunk(requestId));
    },
    authRequired ? null : 2000
  );

  return <div>rid: {requestId}</div>;
};
