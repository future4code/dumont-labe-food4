import React, { useEffect } from "react";
import { FormContainer, Input, ButtonSave } from "./styled";
import { useForm } from "../../hooks/useForm"
import { useHistory } from 'react-router-dom'
import { addAdress } from "../../services/user"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import {useRequestData} from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import NavBar from "../../components/NavBar/NavBar";

const AddressPage = () => {
  useProtectedPage()
  const history = useHistory()

  const { form, onChange, reset, setValues } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})

  const getAllAddress = useRequestData(`${BASE_URL}/profile/address`,undefined)

  const handleSubmission = (e) => {
    e.preventDefault()
    reset()
    addAdress(form, history)

  }

  useEffect(() =>{
    getAllAddress && setValues(getAllAddress.address)
  }, [getAllAddress])

  return (
    <div>
      <NavBar />
      <FormContainer onSubmit={handleSubmission}>
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
          defaultValue="Hello World"
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
          defaultValue="Hello World"
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
          defaultValue="Hello World"
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
          defaultValue="Hello World"
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
          defaultValue="Hello World"
        />
        <ButtonSave variant="contained" color="primary" type="submit">
          Salvar
        </ButtonSave>
      </FormContainer>
    </div>
  );
};

export default AddressPage;
