import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { FlexForm } from '../SignUpPage/styles';
import { useForm } from '../../hooks/useForm'
import NavBar from '../../components/NavBar/NavBar';

const EditProfilePage = () => {
    const {form, onChange} = useForm({ name:'', email: '', cpf: '' })
    
    return (
            <FlexForm>
                <NavBar />
                <TextField
                    name={'name'}
                    type={'text'}
                    label={'Nome'}
                    placeholder={'Nome e sobrenome'}
                    variant={'outlined'}
                    value={form.name}
                    onChange={onChange}
                />
                <TextField
                    name={'email'}
                    type={'email'}
                    label={'Email'}
                    placeholder={'Email'}
                    variant={'outlined'}
                    value={form.email}
                    onChange={onChange}
                />
                <TextField
                    name={'cpf'}
                    type={'text'}
                    label={'CPF'}
                    placeholder={'000.000.000-00'}
                    variant={'outlined'}
                    value={form.cpf}
                    onChange={onChange}
                />
                <Button type={'submit'} variant={'contained'} color={'primary'} >Salvar</Button>
            </FlexForm>
    )
}

export default EditProfilePage;