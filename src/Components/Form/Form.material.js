import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="Client" label="Client" variant="outlined" />
      <TextField id="Time" label="Time" variant="outlined" />
      <TextField id="Transportation" label="Transportation" variant="outlined" />
      <TextField id="Location" label="Location" variant="outlined" />
      <TextField id="Training" label="Type of Training" variant="outlined" />
      <TextField id="Food" label="Food" variant="outlined" />
    </form>
  );
}
