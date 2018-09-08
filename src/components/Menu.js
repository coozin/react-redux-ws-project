import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import { Route } from 'react-router-dom'

const CustMenuItem = ({ onClick, link, text }) => (
  <Route render={({ history }) => (
    <MenuItem
      type='button'
      onClick={() => {
        onClick()
        history.push(link)
      }}
    >
      { text }
    </MenuItem> )}
  />
)

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <MenuIcon
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <CustMenuItem onClick={this.handleClose} link='/tickerTable' text='Tickers' />
          <CustMenuItem onClick={this.handleClose} link='/orderbook' text='Orderbook' />
          <CustMenuItem onClick={this.handleClose} link='/trades' text='Trades' />
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;