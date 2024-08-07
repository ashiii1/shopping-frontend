import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  const [popularProducts,setpopularProducts]=useState([])
  useEffect(()=>{
    fetch('https://shopping-backend-ch7k.onrender.com/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setpopularProducts(data));
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
