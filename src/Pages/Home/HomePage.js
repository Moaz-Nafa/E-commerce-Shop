import React from 'react'
import Slider from '../../Components/Home/Slider';
import HomeCategory from "../../Components/Home/HomeCategory" 
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Category/Brand/BrandFeaturs';

const HomePage = () => {
  return (
    <div className='font'>
      <Slider/>
      <HomeCategory/>
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/product"/>
      <DiscountSection/>
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/product"/>
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد"/>
    </div>
  )
}

export default HomePage
