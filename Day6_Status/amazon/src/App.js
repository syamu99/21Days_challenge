import Header from './Components/Header';
// import Slideshow from './Components/grid1-slides'
// import Grid2 from './Components/AmazonAdds/Grid2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import All from './pages/BottomPages/All'
import TodaysDeals from './pages/BottomPages/TodaysDeals';
import CustomerService from './pages/BottomPages/CustomerService'
import BeautyPics from './pages/Grid1Pages/BeautyPics';
import DeliveryPage from './pages/HeaderPages/DeliveryPage.jsx'
import CartPage from './pages/HeaderPages/CartPage';
import Returns from './pages/HeaderPages/Returns';
import SignInPage from './pages/HeaderPages/SignInPage';
import { Themedata } from './Context/Themedata';

function App() {
  return (
    <div>
       <Themedata>
         <BrowserRouter> 
         <Header />
       
  
     
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/' element={<LandingPage />} />
        {/*Top Navbar*/}
        {/* <Route path='/All Dropdown' element={<dropdowneader />} />
        <Route path='/Delivary' element={<DeliveryPage />} />
        <Route path='/Signin' element={<SignInPage />} />
        <Route path='/Return' element={<Returns />} />
        <Route path='/Cart  ' element={<CartPage />} />
        <Route path='/All' element={<All />} /> */}
        {/*Bottom Navbar*/}
        {/* <Route path='/All' element={<All />} />
        <Route path='/todaysDeals' element={<TodaysDeals />} />
        <Route path='/CustomerService' element={<CustomerService />} />
        <Route path='/shop now' element={<BeautyPics />} />*/}

      </Routes> 

     </BrowserRouter> 
     </Themedata>
     
     </div>
  );
}

export default App;
