import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Uitiltys/SearchCountResult'
import { Container, Row, Col } from 'react-bootstrap'
import SideFilter from '../../Components/Uitiltys/SideFilter'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitiltys/Pagination'

const ShopProductsPage = () => {
  return (
    <div style={{minHeight: "807px", backgroundColor:"#f9f9f9"}}>
      <CategoryHeader/>
      <Container>
      <SearchCountResult title=" نتيجة البحث 400" />
      <Row className='d-flex flex-row'>
        <Col sm="2" xm="2" md="1" className='d-flex'>
        <SideFilter/>
        </Col>

        <Col sm="10" xm="10" md="11">
        <CardProductsContainer/>
        <CardProductsContainer/>
        </Col>
      </Row>
      <Pagination/>
      </Container>
    </div>
  )
}

export default ShopProductsPage
