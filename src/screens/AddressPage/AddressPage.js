import React, { useState } from "react";
import { FormContainer, Input, Title, ButtonSave } from "./styled";
import { useForm } from "../../hooks/useForm"
import { useHistory } from 'react-router-dom'
import { addAdress } from "../../services/user"
import { useProtectedPage } from "../../hooks/useProtectedPage"


const AddressPage = () => {
  useProtectedPage()
  const history = useHistory()

  const { form, onChange, reset } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})

  const handleSubmission = (e) => {
    e.preventDefault()
    reset()
    addAdress(form, history)
  }

  console.log(form)

  return (
    <FormContainer onSubmit={handleSubmission}>
      <Title>Meu endereço</Title>
      <Input
        required
        id="outlined-required"
        label="Logradouro"
        type="text"
        variant="outlined"
        placeholder="Rua/Av."
        name="street"
        value={form.street}
        onChange={onChange}
      />
      <Input
        required
        id="outlined-required"
        label="Número"
        type="text"
        variant="outlined"
        placeholder="Número"
        name="number"
        value={form.number}
        onChange={onChange}
      />
      <Input
        id="outlined-required"
        label="Complemento"
        type="text"
        variant="outlined"
        placeholder="Apto./Bloco"
        name="complement"
        value={form.complement}
        onChange={onChange}
      />
      <Input
        required
        id="outlined-required"
        label="Bairro"
        type="text"
        variant="outlined"
        placeholder="Bairro"
        name="neighbourhood"
        value={form.neighbourhood}
        onChange={onChange}
      />
      <Input
        required
        id="outlined-required"
        label="Cidade"
        type="text"
        variant="outlined"
        placeholder="Cidade"
        name="city"
        value={form.city}
        onChange={onChange}
      />
      <Input
        required
        id="outlined-required"
        label="Estado"
        type="text"
        variant="outlined"
        placeholder="Estado"
        name="state"
        value={form.state}
        onChange={onChange}
      />
      <ButtonSave variant="contained" color="primary" type="submit">
        Salvar
      </ButtonSave>
    </FormContainer>
  );
};

export default AddressPage;
