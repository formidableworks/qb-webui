import { Button, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from './auth-thunk';
import qbitorrentlogo from './qbitorrentlogo.svg';

const useStyles = makeStyles((theme: Theme) => ({
  qbSvgLogo: {
    maxWidth: 200,
    margin: 'auto',
    marginBottom: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  bottomMargin: {
    marginBottom: theme.spacing(1.5),
  },
}));

export const AuthForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const uname = form.get('usrnm') as string;
    const pw = form.get('psswrd') as string;
    dispatch(loginThunk(uname, pw));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <img src={qbitorrentlogo} className={classes.qbSvgLogo} alt="qbitorrent logo" />
      <TextField name="usrnm" label="Username" variant="outlined" className={classes.bottomMargin} />
      <TextField name="psswrd" label="Password" variant="outlined" type="password" className={classes.bottomMargin} />
      <Button color="primary" variant="outlined" type="submit" className={classes.bottomMargin}>
        Login
      </Button>
    </form>
  );
};
