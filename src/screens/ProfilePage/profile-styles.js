import { CircularProgress, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const FlexBox = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 16px;
    gap: 4px;
    flex-direction: column;
    align-items: flex-start;
    background-color:${props => props.greyBackground ? "#EEEEEE" : "#FFF" };
`

export const BaseContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-items: center;
`

export const Divisor = styled.hr`
    width: 100%;
    color: #000;
`

export const ProgressStyled = styled(CircularProgress)`
    position: fixed;
    top: 50vh;
    left: 50vw;
`

export const ButtonLogout = styled.button`
  display: block;
  width: 380px;
  height: 45px;
  font-size: 18px;
  padding: 12px 16px;
  border-radius: 3px;
  border: none;
  background-color: #5cb646;
  margin: 15px auto;
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfilePageContainer = styled.div`
    height: 100%;
    margin-bottom: 76px;
`
export const Text = styled(Typography)`
    font-size: 16px;
`