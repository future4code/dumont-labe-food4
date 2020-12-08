import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { RoundedBorderBox } from './styles'

const OrdersHistoryCard = (props) => {
    return (
        <RoundedBorderBox>
            <Typography color="primary" variant="h5">Bullger Vila Madalena</Typography>
            <Typography variant="h6">23 Outubro 2019</Typography>
            <Typography fontWeight="bold" variant="h5">
                <Box fontWeight="fontWeightBold">
                    SUBTOTAL: R$67,00
                </Box>
            </Typography>
        </RoundedBorderBox>
    )
}

export default OrdersHistoryCard;