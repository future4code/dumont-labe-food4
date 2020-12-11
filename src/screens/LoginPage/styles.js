import styled from 'styled-components'


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 28vh;
    justify-content: space-around;
    margin-bottom: 15px;
    gap: 16px;
`

export const Logo = styled.img`
    width: 40%;
    margin: 20px auto;
`

export const Button = styled.button`
  display: block;
  width: 350px;
  height: 45px;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 3px;
  border: none;
  background-color: #5cb646;
  margin: auto;
`