import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    margin: '150px',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Typography variant="h2">
            <Toolbar disableGutters>
              <img
                style={{ margin: '20px 100px' }}
                src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1593358166/lamed.png"
                alt=""
              />
              <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="primary">
                <Tab className={classes.tab} label="Home" />
                <Tab className={classes.tab} label="Services" />
                <Tab className={classes.tab} label="Accounting" />
                <Tab className={classes.tab} label="About" />
                <Tab className={classes.tab} label="Contact" />
              </Tabs>
            </Toolbar>
          </Typography>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
