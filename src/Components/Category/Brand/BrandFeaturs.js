import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../../Uitiltys/SubTitle'
import BrandCard from './BrandCard'
import brand1 from "../../../Images/brand1.png";
import brand2 from "../../../Images/brand2.png";
import brand3 from "../../../Images/brand3.png";

const BrandFeatured = ({ title, btntitle, img }) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allBrand"/>
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />
            </Row>
        </Container>
    )
}

export default BrandFeatured