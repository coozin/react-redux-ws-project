import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Status: In progress
        </Typography>
        <Typography variant="headline" component="h2">
          Welcome to the Bitfinex API Demonstration
        </Typography>
        <Typography component="p">
          Todo:
          <br />
          {bull} Use Websocket APIs<br />
          {bull} Improve UI<br />
          {bull} Style Components to More Clearly Express Values
          {bull} Build for Production
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="headline">
          Click the dropdown in the top left to navigate to tables
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);