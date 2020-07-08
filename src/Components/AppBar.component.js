import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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
  logoContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

//refactor massive if else statement,
// const paths = {
//   0: '/',
//   1: '/services',
//   2: '/accounting',
//   3: '/about',
//   4: '/contact',
// };

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/' && value !== 0) setValue(0);
    else if (pathname === '/services' && value !== 1) setValue(1);
    else if (pathname === '/accounting' && value !== 2) setValue(2);
    else if (pathname === '/about' && value !== 3) setValue(3);
    else if (pathname === '/contact' && value !== 4) setValue(4);
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Typography variant="h2">
            <Toolbar disableGutters>
              <Button
                component={Link}
                to="/"
                onClick={() => setValue(0)}
                disableRipple
                className={classes.logoContainer}
              >
                <img
                  className={classes.logoContainer}
                  style={{ margin: '20px 100px' }}
                  src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1593358166/lamed.png"
                  alt=""
                />
              </Button>

              <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="primary">
                {anchorEl ? true : undefined}{' '}
                <Tab
                  aria-haspopup="true"
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  className={classes.tab}
                  label="Home"
                  component={Link}
                  to="/"
                />
                <Tab
                  aria-haspopup={anchorEl ? true : undefined}
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  className={classes.tab}
                  onMouseEnter={(e) => handleClick(e)}
                  label="Services"
                  component={Link}
                  to="/services"
                />
                <Tab
                  aria-haspopup={anchorEl ? true : undefined}
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  className={classes.tab}
                  label="Accounting"
                  component={Link}
                  to="/accounting"
                />
                <Tab
                  aria-haspopup={anchorEl ? true : undefined}
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  className={classes.tab}
                  label="About"
                  component={Link}
                  to="/about"
                />
                <Tab
                  aria-haspopup={anchorEl ? true : undefined}
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  className={classes.tab}
                  label="Contact"
                  component={Link}
                  to="/contact"
                />
              </Tabs>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                {servicesOptions.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Toolbar>
          </Typography>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;

const servicesOptions = [
  'Services',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];
const contactOptions = [
  'contact',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];
const otherOptions = [
  'other',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];
