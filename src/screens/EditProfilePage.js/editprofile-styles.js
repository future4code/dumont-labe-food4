import styled from 'styled-components'

export const FlexForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-around;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-top: 20px;
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