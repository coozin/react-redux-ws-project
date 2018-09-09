import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  headline: {
    "padding-bottom": 60,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  left: {
    "text-align": "left",
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
        <Typography className={classes.headline} variant="headline" component="h2">
          Welcome to the Bitfinex API Demonstration
        </Typography>
        <Typography className={classes.left} component="p">
          Todo: <br />
          {bull} Use Websocket APIs<br />
          {bull} Improve UI<br />
          {bull} Style Components to More Clearly Express Values<br />
          {bull} Build for Production
        </Typography>
      </CardContent>
      <CardContent className={classes.left}>
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