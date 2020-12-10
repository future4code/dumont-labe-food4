import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import grayAvatar from "../../assets/grey-avatar.svg";
import grayCart from "../../assets/grey-cart.svg";
import grayHome from "../../assets/grey-home.svg";
import greenAvatar from "../../assets/green-avatar.svg";
import { goToFeed, goToCart, goToProfile } from "../../router/coordinator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

export function NavBottom(props) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        icon={<img src={grayHome} alt="home" />}
        onClick={() => goToFeed(history)}
      />
      <BottomNavigationAction
        icon={<img src={grayCart} alt="carrinho" />}
        onClick={() => goToCart(history)}
      />
      <BottomNavigationAction
        icon={props.changeColor ? <img src={greenAvatar} alt="avatar" /> : <img src={grayAvatar} alt="avatar" />}
        onClick={() => goToProfile(history)}
      />
    </BottomNavigation>
  );
}
