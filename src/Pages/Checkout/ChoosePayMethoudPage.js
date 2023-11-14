import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethod from '../../Components/Checkout/ChoosePayMethod'

const ChoosePayMethoudPage = () => {
    return (
        <Container style={{minHeight:'816px'}}>
           <ChoosePayMethod />
        </Container>
    )
}

export default ChoosePayMethoudPage