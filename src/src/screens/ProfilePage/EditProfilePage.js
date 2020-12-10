import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { FlexForm, LoginContainer } from './editprofile-styles';
import { useForm } from '../../hooks/useForm'
import NavBar from '../../components/NavBar/NavBar';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { editProfile } from '../../services/user';
import { cpfMask } from '../../util/functions'

const EditProfilePage = () => {
    useProtectedPage()
    const { form, onChange, reset } = useForm({ name:'', email: '', cpf: '' })
    const formatedCPF = cpfMask(form.cpf)

    const handleSubmit = (event) => {
        event.preventDefault()
        editProfile(form)
        reset()
    }

    return (
            <div>
                <NavBar />
                 <LoginContainer>
                    <FlexForm onSubmit={handleSubmit}>
                        <TextField
                            required
                            name={'name'}
                            type={'text'}
                            label={'Nome'}
                            placeholder={'Nome e sobrenome'}
                            variant={'outlined'}
                            value={form.name}
                            onChange={onChange}
                        />
                        <TextField
                            required
                            name={'email'}
                            type={'email'}
                            label={'Email'}
                            placeholder={'Email'}
                            variant={'outlined'}
                            value={form.email}
                            onChange={onChange}
                        />
                        <TextField
                            required
                            name={'cpf'}
                            type={'text'}
                            label={'CPF'}
                            placeholder={'000.000.000-00'}
                            variant={'outlined'}
                            value={formatedCPF}
                            onChange={onChange}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'} >Salvar</Button>
                    </FlexForm>
                </LoginContainer>
            </div>
    )
}

export default EditProfilePage;