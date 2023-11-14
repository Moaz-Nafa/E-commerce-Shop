import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import Footer from "./Components/Uitiltys/Footer";
import NavBarLogin from "./Components/Uitiltys/NavBarLogin";
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import AllBrandaPage from "./Pages/Brand/AllBrandPage.js";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage.js";


function App() {
  return (
    <div className="App">
      <NavBarLogin/>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/allCategory" element={<AllCategoryPage/>}/>
            <Route path="/allBrand" element={<AllBrandaPage/>}/>
            <Route path="/product" element={<ShopProductsPage/>}/>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
