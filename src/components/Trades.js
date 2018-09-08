import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function createData(tickerName, last, dayChange, volume) {
  return { tickerName, last, dayChange, volume };
}

const rows = [
  createData('BTC', 159, 6.0, 24),
  createData('ETH', 237, 9.0, 37),
  createData('EOS', 262, 16.0, 24),
  createData('BCH', 305, 3.7, 67),
  createData('NEO', 356, 16.0, 49),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell numeric>LAST</TableCell>
            <TableCell numeric>24HR</TableCell>
            <TableCell numeric>VOL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.tickerName}
                </TableCell>
                <TableCell numeric>{row.last}</TableCell>
                <TableCell numeric>{row.dayChange}</TableCell>
                <TableCell numeric>{row.volume}</TableCell>
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