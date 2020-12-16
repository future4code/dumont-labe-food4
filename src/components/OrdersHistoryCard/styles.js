import styled from 'styled-components'
import { Typography, Box } from '@material-ui/core'

export const RoundedBorderBox = styled.div`
    display: flex;
    margin: 8px 16px;
    padding: 16px;
    gap: 8px;
    flex-direction: column;
    border-radius: 8px;
    border: solid 1px #B8B8B8;
    align-items: flex-start;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`
export const Subtotal = styled(Box)`
    font-size: 16px;
`
export const Text = styled(Typography)`
    font-size: 16px;
`
export const TextDate = styled(Typography)`
    font-size: 14px;
`
export const TextName = styled(Typography)`
    font-size: 16px;
    color:#5cb646;
`