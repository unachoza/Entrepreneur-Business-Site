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
      <TextField id="outlined-basic" label="Client" variant="outlined" />
      <TextField id="outlined-basic" label="Time" variant="outlined" />
      <TextField id="outlined-basic" label="Transportation" variant="outlined" />
      <TextField id="outlined-basic" label="Location" variant="outlined" />
      <TextField id="outlined-basic" label="Type of Training" variant="outlined" />
      <TextField id="outlined-basic" label="Food" variant="outlined" />
    </form>
  );
}
