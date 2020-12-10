import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { RoundedBorderBox } from './styles'
import { timestampToString } from '../../util/functions'

const OrdersHistoryCard = (props) => {
    const date = timestampToString(props.date)

    return (
        <RoundedBorderBox>
            <Typography color="primary" variant="h5">{props.restaurantName}</Typography>
            <Typography variant="h6">{date}</Typography>
            <Typography fontWeight="bold" variant="h5">
                <Box fontWeight="fontWeightBold">
                    {`SUBTOTAL: R$${props.price}`}
                </Box>
            </Typography>
        </RoundedBorderBox>
    )
}

export default OrdersHistoryCard;