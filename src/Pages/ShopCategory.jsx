import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import drop_down from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext) ;
  console.log(all_product);
   return (
    <div className='shop-category'>
      <img className="shopcategory-banner"src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>
        {
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        }
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
// import React from 'react';
// import './CSS/ShopCategory.css';

// const ShopCategory = (props) => {
//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="Banner" />
//     </div>
//   );
// }

// export default ShopCategory;

