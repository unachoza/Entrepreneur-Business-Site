import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    width: '100%',
    zIndex: -1,
    position: 'fixed',
    bottom: 0,
    height: '8vh',
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return <footer className={classes.footer}>At the very bottom</footer>;
}
