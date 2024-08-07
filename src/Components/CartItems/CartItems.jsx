// import React, { useContext, useState } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png';
// import DeliveryInfoForm from './DeliveryInfoForm';

// const CartItems = () => {
//     const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
//     const [showDeliveryForm, setShowDeliveryForm] = useState(false);

//     const handleProceedToCheckout = () => {
//         setShowDeliveryForm(true);
//     };

//     const handleDeliveryInfoSubmit = (formData) => {
//         console.log('Delivery info submitted:', formData);
//         // Here you could redirect to the payment form or handle logic as needed
//     };

//     if (showDeliveryForm) {
//         return <DeliveryInfoForm onSubmit={handleDeliveryInfoSubmit} />;
//     }

//     return (
//         <div className='cartitems'>
//             {/* Cart item structure */}
//             <div className="cartitem-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e) => {
//                 if (cartItems[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                             <div className="cartitems-format cartitem-format-main">
//                                 <img src={e.image} alt="" className='carticon-product-icon' />
//                                 <p>{e.name}</p>
//                                 <p>${e.new_price}</p>
//                                 <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                                 <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
//                                 <img className='cartitems-remove--icon' src={remove_icon} onClick={() => { removeFromCart(e.id); }} alt="" />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount().toFixed(2)}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount().toFixed(2)}</h3>
//                         </div>
//                     </div>
//                     <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItems;





import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png';
import DeliveryInfoForm from './DeliveryInfoForm';

const CartItems = () => {
  const { getTotalcartamount, all_product, cartItems, removeFromCart } = useContext(ShopContext); // Update function name here
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  const handleProceedToCheckout = () => {
    setShowDeliveryForm(true);
  };

  const handleDeliveryInfoSubmit = (formData) => {
    console.log('Delivery info submitted:', formData);
  };

  if (showDeliveryForm) {
    return <DeliveryInfoForm onSubmit={handleDeliveryInfoSubmit} />;
  }

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove--icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" /> {/* Update function call here */}
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalcartamount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalcartamount()}</h3>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png'

// const CartItems = () => {
//     const {getTotalcartamount,all_product,cartItems,removefromCart}=useContext(ShopContext)
//   return (
//     <div className='cartitems'>
//       <div className="cartitem-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr/>
//       {all_product.map((e)=>{
//         if(cartItems[e.id]>0)
//         {
//             return   (
//               <div key={e.id}>
//                 <div className="cartitems-format cartitem-format-main">
//                     <img src={e.image} alt="" className='carticon-product-icon'/>
//                     <p>{e.name}</p>
//                     <p>${e.new_price}</p>
//                     <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                     <p>${e.new_price * cartItems[e.id]}</p>
//                     <img className='cartitems-remove--icon' src={remove_icon} onClick={()=>{removefromCart(e.id)}} alt="" />
//                 </div>
//                 <hr/>
//               </div>
//             )
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//             <h1>Cart Totals</h1>
//             <div>
//                 <div className="cartitems-total-item">
//                     <p>Subtotal</p>
//                     <p>${getTotalcartamount()}</p>
//                 </div>
//                 <hr/>
//                 <div className="cartitems-total-item">
//                     <p>Shipping Fee</p>
//                     <p>Free</p>
//                 </div>
//                 <hr/>
//                 <div className="cartitems-total-item">
//                     <h3>Total</h3>
//                     <h3>${getTotalcartamount()}</h3>
//                 </div>
//             </div>
//             <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//             <p>If you have a promocode,Enter it here</p>
//             <div className="cartitems-promobox">
//                 <input type="text" placeholder='promo code' />
//                 <button>Submit</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartItems


