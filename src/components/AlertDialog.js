import React, {  useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OptionContext from "../context/OptionContext";
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const AlertDialog = (props) => {
  const {option, setOption} = useContext(OptionContext)

  const handleSelect = (e) => {
    setOption(e.target.value)
  }

  const handleCart = () => {
    props.addItemToCart()
    props.handleClose()
  }

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CloseButtonContainer>
          <IconButton edge="start" onClick={props.handleClose}>
            <CloseIcon/>
          </IconButton>
        </CloseButtonContainer>
        
        <DialogTitle id="alert-dialog-title">
          Selecione a quantidade desejada
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Quantidade
              </InputLabel>
              <Select required onChange={handleSelect} value={option} label="Quantidade">
                <option aria-label="None" disabled />
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </Select>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCart} color="primary">
            ADICIONAR AO CARRINHO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog