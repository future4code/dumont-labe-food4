import React from "react";
import { FormContainer, Input, Title, ButtonSave } from "./styled";


const AddressPage = () => {
  return (
    <FormContainer>
      <Title>Meu endereço</Title>
      <Input
        required
        id="outlined-required"
        label="Logradouro"
        type="text"
        variant="outlined"
        placeholder="Rua/Av."
      />
      <Input
        required
        id="outlined-required"
        label="Número"
        type="text"
        variant="outlined"
        placeholder="Número"
      />
      <Input
        id="outlined-required"
        label="Complemento"
        type="text"
        variant="outlined"
        placeholder="Apto./Bloco"
      />
      <Input
        required
        id="outlined-required"
        label="Bairro"
        type="text"
        variant="outlined"
        placeholder="Bairro"
      />
      <Input
        required
        id="outlined-required"
        label="Cidade"
        type="text"
        variant="outlined"
        placeholder="Cidade"
      />
      <Input
        required
        id="outlined-required"
        label="Estado"
        type="text"
        variant="outlined"
        placeholder="Estado"
      />
      <ButtonSave variant="contained" color="primary" type="submit">
        Salvar
      </ButtonSave>
    </FormContainer>
  );
};

export default AddressPage;
