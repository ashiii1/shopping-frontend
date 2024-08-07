import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="desc-navigator">
        <div className="desc-nav-box">
            Description
        </div>
        <div className="desc-nav-box  fade">
            Reviews (122)
        </div>
      </div>
      <div className="descrptionbox-descrption">
        
        <p>A website that allows people to buy and sell physical goods, 
            services, and digital products over the internet rather than at a brick-and-mortar location. 
            Through an e-commerce website, a business can process orders, accept payments,
             manage shipping and logistics, and provide customer service.</p>
        <p>
            E-Commerce website typically display product or services ,detailed description,images,prices .Each product usually 
            has its own relevant information
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
