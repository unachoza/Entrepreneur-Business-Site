import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';

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
    margin: '30px',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
  },
}));

const paths = {
  0: '/',
  1: '/services',
  2: '/accounting',
  3: '/about',
  4: '/contact',
};

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === value && value !== paths[value]) setValue(value);
  }, [value]);

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
                <Tab className={classes.tab} label="Home" component={Link} to="/" />
                <Tab className={classes.tab} label="Services" component={Link} to="/services" />
                <Tab className={classes.tab} label="Accounting" component={Link} to="/accounting" />
                <Tab className={classes.tab} label="About" component={Link} to="/about" />
                <Tab className={classes.tab} label="Contact" component={Link} to="/contact" />
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
