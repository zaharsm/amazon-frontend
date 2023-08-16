import React from 'react'
import { useStateValue } from '../StateProvider';

function Checkout() {
    const [{basket} ] = useStateValue();
    console.log('checkout >>>>>', basket)

    return (
    <div>Checkout</div>
    )
}

export default Checkout