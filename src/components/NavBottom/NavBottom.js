import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import grayAvatar from "../../assets/grey-avatar.svg";
import grayCart from "../../assets/grey-cart.svg";
import grayHome from "../../assets/grey-home.svg";
import greenAvatar from "../../assets/green-avatar.svg";
import greenCart from "../../assets/green-cart.svg";
import greenHome from "../../assets/green-home.svg";
import { goToFeed, goToCart, goToProfile } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import {BottomNav} from "./styled";

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
    <BottomNav
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        icon={props.changeColorHome ? <img src={greenHome} alt="avatar" /> : <img src={grayHome} alt="avatar" />}
        onClick={() => goToFeed(history)}
      />
      <BottomNavigationAction
        icon={props.changeColorCart ? <img src={greenCart} alt="avatar" /> : <img src={grayCart} alt="avatar" />}
        onClick={() => goToCart(history)}
      />
      <BottomNavigationAction
        icon={props.changeColorAvatar ? <img src={greenAvatar} alt="avatar" /> : <img src={grayAvatar} alt="avatar" />}
        onClick={() => goToProfile(history)}
      />
    </BottomNav>
  );
}
