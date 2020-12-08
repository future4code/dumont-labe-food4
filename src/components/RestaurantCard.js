import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'
import {goToRestaurantDetails} from '../router/coordinator'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history =useHistory()

  return (
    <Card onClick={()=> goToRestaurantDetails(history, props.id)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h3" color="primary"> 
           Bullguer-Vila Madalena
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Burguer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            50-60 mim - Frete:R$ 6,00
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rua Fradique Coutinho, 345 - Vila Madalena
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
