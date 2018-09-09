import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';


function websocket(subsribeUrl, ArrayOfChannels) {

  const socket = SockJS(subsribeUrl); //create wrapper
  const stompClient = Stomp.over(socket); //connect using your client

  stompClient.connect({}, () => {
    ArrayOfChannels.forEach((channel) => {
      stompClient.subscribe(channel.route, channel.callback);
    });
  }, () => {
    setTimeout(() => {
      console.log(subsribeUrl, ArrayOfChannels)
    }, 0);
 });   
}

const styles = theme => ({
  root: {
    width: 'calc(100% - 100px)',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 50,
  },
  table: {
    minWidth: 700,
  },
});

function createData(time, price, amount) {
  return { time, price, amount };
}

const rows = [
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
  createData("14:38:15", 203.31, 9.9865),
];

function SimpleTable(props) {
  const { classes } = props;

  let id = 0;

  websocket('wss://api.bitfinex.com/ws/2', [
    'trades'
  ]);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>TIME</TableCell>
            <TableCell numeric>PRICE</TableCell>
            <TableCell numeric>AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            id++;
            return (
              <TableRow key={`trade_` + id}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell numeric>{row.price}</TableCell>
                <TableCell numeric>{row.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);