// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import LoginSignup from './Pages/LoginSignup';
// import Cart from './Pages/Cart';
// import Shop from './Pages/Shop';
// import Wishlist from './Components/Wishlist/Wishlist';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
// import women_banner from './Components/Assets/Frontend_Assets/banner_women.png';
// import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png';
// import DeliveryInfoForm from './Components/CartItems/DeliveryInfoForm';
// import PaymentForm from './Components/Payment/PaymentForm';
// import ShopContextProvider from './Context/ShopContext'; // Import the provider

// function App() {
//   return (
//     <ShopContextProvider>
//       <div>
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path='/' element={<Shop />} />
//             <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
//             <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
//             <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
//             <Route path='/product'>
//               <Route path=':productId' element={<Product />} />
//             </Route>
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/login' element={<LoginSignup />} />
//             <Route path='/wishlist' element={<Wishlist />} />
//             <Route path='/delivery-form' element={<DeliveryInfoForm />} />
//             <Route path='/payment-form' element={<PaymentForm />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </div>
//     </ShopContextProvider>
//   );
// }

// export default App;

// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import LoginSignup from './Pages/LoginSignup';
// import Cart from './Pages/Cart';
// import Shop from './Pages/Shop';
// import Wishlist from './Components/Wishlist/Wishlist';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
// import women_banner from './Components/Assets/Frontend_Assets/banner_women.png';
// import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png';
// import DeliveryInfoForm from './Components/CartItems/DeliveryInfoForm';
// import PaymentForm from './Components/Payment/PaymentForm';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Shop />} />
//           <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
//           <Route path='/product'>
//             <Route path=':productId' element={<Product />} />
//           </Route>
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//           <Route path='/wishlist' element={<Wishlist />} />
//           <Route path='/delivery-form' element={<DeliveryInfoForm />} />
//           <Route path='/payment-form' element={<PaymentForm />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Wishlist from './Components/Wishlist/Wishlist';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png';
import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product'>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import LoginSignup from './Pages/LoginSignup';
// import Cart from './Pages/Cart';
// import Shop from './Pages/Shop';
// import Footer from './Components/Footer/Footer'
// import men_banner  from './Components/Assets/Frontend_Assets/banner_mens.png'
// import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
// import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png'

// function App() {
//   return (
//     <div >
      
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
//         <Route path='/women' element={<ShopCategory banner={women_banner}category="women"/>}/>
//         <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kid"/>}/>
//         <Route path="/product" element={<Product/>}>
//           <Route path=':productId' element={<Product/>}/>
//         </Route>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<LoginSignup/>}/>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>

      
//     </div>
//   );
// }

// export default App;
