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
    maxWidth: 360,
  },
  media: {
    height: 140,
  },
});

const CardContainer = styled(Card)`
  margin-top: 10px;
  margin: ${props => props.isFeedPage ? "16px" : "0px"};  
`

// const Image = styled(CardMedia)`
//   width: 360px;
//   height: 120px;
// `
const PriceAndTime = styled.div`
  display:flex;
  justify-content:space-between;
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
