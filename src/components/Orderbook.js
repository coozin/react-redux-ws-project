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
    width: 'calc(100% - 100px)',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 50,
  },
  table: {
    minWidth: 700,
  },
});

function createData(countBuy, amountBuy, totalBuy, priceBuy, priceSell, totalSell, amountSell, countSell) {
  return { countBuy, amountBuy, totalBuy, priceBuy, priceSell, totalSell, amountSell, countSell };
}

const rows = [
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
  createData(234, 159, 6.0, 24, 24, 6.0, 159, 234),
];

function SimpleTable(props) {
  const { classes } = props;

  let id = 0;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>COUNT</TableCell>
            <TableCell numeric>AMOUNT</TableCell>
            <TableCell numeric>TOTAL</TableCell>
            <TableCell numeric>PRICE</TableCell>
            <TableCell numeric>PRICE</TableCell>
            <TableCell numeric>TOTAL</TableCell>
            <TableCell numeric>AMOUNT</TableCell>
            <TableCell numeric>COUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            id++;
            return (
              <TableRow key={`orders_` + id}>
                <TableCell numeric>{row.countBuy}</TableCell>
                <TableCell numeric>{row.amountBuy}</TableCell>
                <TableCell numeric>{row.totalBuy}</TableCell>
                <TableCell numeric>{row.priceBuy}</TableCell>

                <TableCell numeric>{row.priceSell}</TableCell>
                <TableCell numeric>{row.totalSell}</TableCell>
                <TableCell numeric>{row.amountSell}</TableCell>
                <TableCell numeric>{row.countSell}</TableCell>
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