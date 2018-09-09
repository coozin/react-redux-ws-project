import React from 'react';
import PropTypes from 'prop-types';

// Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

// Local
import MyMenu from './Menu';

// Utilities
import { Route } from 'react-router-dom'

const HomeIconRedirect = ({ link }) => (
  <Route render={({ history }) => (
    <HomeIcon
      type='button'
      onClick={() => {
        history.push(link)
      }}
    /> )}
  />
)

const styles = {
  root: {
    flexGrow: 1,
    "justify-content": "space-between",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  homeButton: {
    float: "right",
  },
};

function ButtonAppBar(props) {

  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MyMenu />
        </IconButton>
        <Typography variant="title" color="inherit" >
          Using Bitfinex API
        </Typography>
        <IconButton className={classes.homeButton} color="inherit" aria-label="Home">
          <HomeIconRedirect link="/" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);