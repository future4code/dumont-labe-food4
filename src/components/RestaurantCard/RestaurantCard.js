import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContainer, PriceAndTime } from './styles'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import { goToRestaurantDetails } from '../../router/coordinator'


const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 140,
  },
});


export default function RestaurantCard(props) {
  const classes = useStyles();
  const history = useHistory()

  return (
    <CardContainer onClick={() => goToRestaurantDetails(history, props.id)}>
      <CardActionArea>
        <CardMedia className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h3" color="primary">
            {props.name}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.category}
          </Typography>


          <PriceAndTime>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.deliveryTime} minutos
          </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Frete R$ {props.shipping}
            </Typography>
          </PriceAndTime>


          <Typography variant="body2" color="textSecondary" component="p">
            {props.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}
