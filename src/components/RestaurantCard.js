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
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardContainer = styled(Card)`
  width: 360px;
  height: 200px;
  margin-top: 8px;
  padding: 0 16px 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

const Image = styled(CardMedia)`
  width: 360px;
  height: 120px;
`

export default function RestaurantCard(props) {
  const classes = useStyles();
  const history =useHistory()

  return (
    <CardContainer onClick={()=> goToRestaurantDetails(history, props.id)}>
      <CardActionArea>
        <CardMedia className={classes.media}
          image= {props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h3" color="primary"> 
           {props.name}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.deliveryTime} minutos
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Frete R${props.shipping}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}
