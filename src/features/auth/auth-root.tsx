import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { useSelector } from 'react-redux';
import { AuthForm } from './auth-form';
import { selectIsAuthorised } from './auth-thunk';
import { ErrorDisplay } from './error-display';

export const AuthRoot = (): JSX.Element => {
  const isAuthorised = useSelector(selectIsAuthorised);

  return (
    <Dialog open={!isAuthorised} aria-labelledby="login-dialog-title" disableBackdropClick>
      <DialogTitle id="login-dialog-title">Qbittorent Login</DialogTitle>
      <DialogContent>
        <AuthForm />
        <ErrorDisplay />
      </DialogContent>
    </Dialog>
  );
};
