import React from 'react'
import { RoundedBorderBox, Subtotal, Text, TextDate, TextName } from './styles'
import { timestampToString } from '../../util/functions'

const OrdersHistoryCard = (props) => {
    const date = timestampToString(props.date)

    return (
        <RoundedBorderBox>
            <TextName color="primary" variant="h5">{props.restaurantName}</TextName>
            <TextDate variant="h6">{date}</TextDate>
            <Text fontWeight="bold" variant="h5">
                <Subtotal fontWeight="fontWeightBold">
                    {`SUBTOTAL: R$${props.price}`}
                </Subtotal>
            </Text>
        </RoundedBorderBox>
    )
}

export default OrdersHistoryCard;