import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import grayAvatar from "../../assets/grey-avatar.svg";
import grayCart from "../../assets/grey-cart.svg";
import grayHome from "../../assets/grey-home.svg";
import greenAvatar from "../../assets/green-avatar.svg";
import greenCart from "../../assets/green-cart.svg";
import greenHome from "../../assets/green-home.svg";
import { goToFeed, goToCart, goToProfile } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import { Switch } from "@material-ui/core";

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
        icon={<img src={grayHome} />}
        onClick={() => goToFeed(history)}
      />
      <BottomNavigationAction
        icon={<img src={grayCart} />}
        onClick={() => goToCart(history)}
      />
      <BottomNavigationAction
        icon={props.changeColor ? <img src={greenAvatar} /> : <img src={grayAvatar} />}
        onClick={() => goToProfile(history)}
      />
    </BottomNavigation>
  );
}
