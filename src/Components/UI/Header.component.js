import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useTheme } from '@material-ui/core/styles';
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
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    // theme.palette.common.blue
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/' && value !== 0) setValue(0);
    else if (pathname === '/services' && value !== 1) setValue(1);
    else if (pathname === '/accounting' && value !== 2) setValue(2);
    else if (pathname === '/about' && value !== 3) setValue(3);
    else if (pathname === '/garden' && value !== 4) setValue(4);
    else if (pathname === '/contact' && value !== 5) setValue(5);
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
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
                {anchorEl ? true : undefined}
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
                  label="Garden"
                  component={Link}
                  to="/garden"
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
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{
                  onMouseLeave: handleClose,
                }}
                elevation={0}
                style={{ zIndex: 1302 }}
                keepMounted
              >
                {servicesOptions.map((option, index) => (
                  <MenuItem
                    key={`${option}${index}`}
                    disabled={index === 0}
                    selected={index === selectedIndex}
                    onClick={(event) => {
                      handleMenuItemClick(event, index);
                      setValue(1);
                      handleClose();
                    }}
                    component={Link}
                    to={option.link}
                    classes={{ root: classes.menuItem }}
                  >
                    {option.name}
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
  { name: 'Services', link: '/services' },
  { name: 'Show all', link: '/Show all' },
  { name: 'Hidesensitive', link: '/Hidesensitive' },
  { name: 'Hideall', link: '/Hideall' },
  { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
  {
    name: 'Custom Software Development',
    link: '/customsoftware',
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: 'iOS/Android App Development',
    link: '/mobileapps',
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: 'Website Development',
    link: '/websites',
    activeIndex: 1,
    selectedIndex: 3,
  },
];
