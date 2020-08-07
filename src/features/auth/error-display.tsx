import { Collapse, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectErrorText } from './auth-thunk';

const useStyles = makeStyles((theme: Theme) => ({
  typography: {
    color: theme.palette.error.main,
    textAlign: 'center',
  },
}));

export const ErrorDisplay = (): JSX.Element => {
  const classes = useStyles();
  const errorText = useSelector(selectErrorText);

  return (
    <Collapse in={errorText.length > 0}>
      <Typography variant="subtitle2" className={classes.typography}>
        {errorText}
      </Typography>
    </Collapse>
  );
};
