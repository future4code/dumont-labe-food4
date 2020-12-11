import Card from '@material-ui/core/Card';
import styled from 'styled-components'

export const CardContainer = styled(Card)`
margin-top: 10px;
margin: ${props => props.isFeedPage ? "16px" : "0px"};  
`

export const PriceAndTime = styled.div`
display:flex;
justify-content:space-between;
`