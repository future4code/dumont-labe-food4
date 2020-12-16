import React from 'react';
import { Snackbar, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';

function Alert(props) {
  return <MuiAlert elevation={5} variant="filled" {...props} />;
}

// fomos obrigada a usar useStyles pq deu erro ao inicializar com o styled
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '3em',
    display: 'flex',
    justifyContent: 'center'
  },
  alert: {
    width: '100%',
    height: '118px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    borderRadius: '0',
  },
  details: {
    color: 'black',
    paddingLeft: '2em'
  },
  inProgress: {
    paddingLeft: '2em'
  }
}));

const SnackBar = (props) => {
  const classes = useStyles();

  return (
      <Snackbar className={classes.root} open={props.open} autoHideDuration={6000}>
        <Alert className={classes.alert} icon={<ScheduleIcon fontSize="large" />} severity="success">
          <Typography className={classes.inProgress} variant="subtitle1">Pedido em andamento</Typography>
          <Typography className={classes.details} variant="subtitle1">{props.restaurant}</Typography>
          <Typography className={classes.details} variant="subtitle1"><strong>SUBTOTAL: R$ {props.totalPrice}</strong></Typography>
        </Alert>
      </Snackbar>
  );
}

export default SnackBar;