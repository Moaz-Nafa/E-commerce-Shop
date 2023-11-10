import React from 'react';
import { Container, Row } from 'react-bootstrap';
import clothe from "../../Images/clothe.png"
import cat2 from "../../Images/cat2.png"
import labtop from "../../Images/labtop.png"
import sale from "../../Images/sale.png"
import pic from "../../Images/pic.png"
import CategoryCard from '../../Components/Category/CategoryCard';

const CategoryContainer = () => {
  return (
    <Container >
      <div className='admin-content-text'>كل التصنيفات</div>
        <Row className='mb-2 pb-4 d-flex justify-content-between '>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={labtop} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={sale} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={pic} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={labtop} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={pic} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={pic} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={sale} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={labtop} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={sale} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={labtop} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={pic} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={labtop} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={sale} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={pic} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={sale} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={cat2} background="#FF6262"/>
            <CategoryCard title='اجهزة منزليه' img={clothe} background="#0034ff"/>
            <CategoryCard title='اجهزة منزليه' img={pic} background="#F4DBA4"/>
            <CategoryCard title='اجهزة منزليه' img={sale} background="#FF6262"/>
        </Row>
    </Container>
  )
}

export default CategoryContainer
