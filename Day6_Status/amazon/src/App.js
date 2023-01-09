// import Header from './Components/Header';
// import Slideshow from './Components/grid1-slides'
// import Grid2 from './Components/AmazonAdds/Grid2'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/Themedata';
import LandingPage from './pages/LandingPage'
import All from './pages/BottomPages/All'
import TodaysDeals from './pages/BottomPages/TodaysDeals';
import CustomerService from './pages/BottomPages/CustomerService'
import BeautyPics from './pages/Grid1Pages/BeautyPics';
import DeliveryPage from './pages/HeaderPages/DeliveryPage.jsx'
import CartPage from './pages/HeaderPages/CartPage';
import Returns from './pages/HeaderPages/Returns';
// import SignInPage from './pages/HeaderPages/SignInPage';
import EasyReturns from './pages/Grid1Pages/EasyReturns';
import Electronics from './pages/Grid1Pages/Electronics';
import HealthandPersonal from './pages/Grid1Pages/Health and personal care'
import GetFitAtHome from './pages/Grid1Pages/GetFitAtHome'
import Dresses from './pages/Grid1Pages/Dresses'  
import ShopDeals from './pages/Grid1Pages/ShopDeals'
import GiftsCards from './pages/BottomPages/Gifts'
import CreateAmazonAccount from './pages/HeaderPages/CreateSigninPage/CreateAmazonAccount';

// import './app-routes';

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          {/* <Header />  */}
         
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/LandingPage' element={<LandingPage />} />

            <Route path='/All Dropdown' element={<dropdowneader />} />
            <Route path='/Delivary' element={<DeliveryPage />} />
            {/* <Route path='/Signin' element={<SignInPage />} /> */}
             <Route path='/Signin' element={<CreateAmazonAccount />} />

            <Route path='/Return' element={<Returns />} />
            <Route path='/Cart  ' element={<CartPage />} />
            <Route path='/All' element={<All />} />

            <Route path='/todaysDeals' element={<TodaysDeals />} />
            <Route path='/CustomerService' element={<CustomerService />} />
            <Route path='/Shopdeals' element={< ShopDeals/>} />
            <Route path='/Giftcards' element={< GiftsCards/>} />


            <Route path='/shopnow' element={<BeautyPics />} />
            <Route path='/Learnmore' element={<EasyReturns />} />
            <Route path='/shopnow' element={<HealthandPersonal />} />
            <Route path='/See more' element={<Electronics />} />
            <Route path='/Explorenow' element={<GetFitAtHome />} />
            <Route path='/shopnow' element={<GetFitAtHome />} />
            <Route path='/shopnow' element={<Dresses />} />



          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
