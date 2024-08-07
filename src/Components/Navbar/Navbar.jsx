// import React, { useContext, useRef, useState } from 'react';
// import './Navbar.css';
// import logo from '../Assets/Frontend_Assets/logo.png';
// import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';
// import drop_down from '../Assets/Frontend_Assets/nav_dropdown.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext); // Use correct function name
//     const menuref = useRef();

//     const dropdown_toggle = (e) => {
//         menuref.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     };

//     return (
//         <div className='navbar'>
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//                 <p>SHOPPER</p>
//             </div>
//             <img className='nav-drop-down' onClick={dropdown_toggle} src={drop_down} alt="Dropdown Icon" />
//             <ul ref={menuref} className="nav-menu">
//                 <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" && <hr />}</li>
//                 <li onClick={() => setMenu("men")}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu === "men" && <hr />}</li>
//                 <li onClick={() => setMenu("women")}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu === "women" && <hr />}</li>
//                 <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" && <hr />}</li>
//                 <li onClick={() => setMenu("wishlist")}><Link style={{ textDecoration: 'none' }} to='/wishlist'>Wishlist</Link>{menu === "wishlist" && <hr />}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                     ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
//                     : <Link to='/login'><button>Login</button></Link>}
//                 <Link to='/cart'><img src={cart_icon} style={{ position: 'relative' }} alt="Cart Icon" /></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div> {/* Correct function call */}
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import drop_down from '../Assets/Frontend_Assets/nav_dropdown.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { gettotalcartitems } = useContext(ShopContext);
    const menuref = useRef();
    const dropdown_toggle = (e) => {
        menuref.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""></img>
                <p>SHOPPER</p>
            </div>
            <img className='nav-drop-down' onClick={dropdown_toggle} src={drop_down} alt="" />
            <ul ref={menuref} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link> {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("wishlist") }}><Link style={{ textDecoration: 'none' }} to='/wishlist'>Wishlist</Link> {menu === "wishlist" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
                    : <Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} style={{ position: 'relative' }} alt="" /></Link>
                <div className="nav-cart-count">{gettotalcartitems()}</div>
            </div>
        </div>
    );
};

export default Navbar;

// import React, { useContext, useRef, useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/Frontend_Assets/logo.png'
// import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'
// import drop_down from '../Assets/Frontend_Assets/nav_dropdown.png'
// const Navbar = () => {
//     const[menu,setMenu]=useState("shop");
//     const{gettotalcartitems}=useContext(ShopContext)
//     const menuref=useRef();
//     const dropdown_toggle=(e)=>{
//       menuref.current.classList.toggle('nav-menu-visible');
//       e.target.classList.toggle('open')
//     }
//   return (
//     <div className='navbar'>
//         <div className="nav-logo">
//             <img src={logo} alt=""></img>
//             <p>SHOPPER</p>
//         </div>
//         <img className='nav-drop-down' onClick={dropdown_toggle} src={drop_down} alt="" />
//         <ul ref={menuref} className="nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link> {menu==="men"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
//         </ul>
//         <div className="nav-login-cart">
//           {localStorage.getItem('auth-token')
//           ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
//         :<Link to='/login'><button>Login</button></Link>}
            
//             <Link to='/cart'><img src={cart_icon} style={{ position: 'relative' }} alt=""/></Link>
//             <div className="nav-cart-count">{gettotalcartitems()}</div>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar
