import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Uitiltys/SubTitle';
import ProductCard from './ProductCard';

const CardProductsContainer = ({btntitle, title, pathText}) => {
  return (
    <Container>
        <SubTitle title={title} btntitle={btntitle} pathText={pathText}/>
        <Row className='my-2 py-4 d-flex justify-content-between '>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Row>
    </Container>
  )
}

export default CardProductsContainer
