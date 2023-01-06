import React from 'react'
import '../../../scss/Header.scss'

const TodaysDeals = () => {
  return (
    <div className='deals'>
      
        <figcaption>
          <img className="deals__photo1" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="image1" />
          <div className='deals__name1'>product1</div>
          <p className='deals__title1'>title: Fjallraven</p>
        </figcaption>
      
      
        <figcaption>
          <img className="deals__photo2" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="image2" />
          <div className='deals__name2'>product2</div>
          <p className='deals__title2'>Mens Casual Premium Slim Fit T-Shirts</p>
        </figcaption>
      
    </div>
  )
}

export default TodaysDeals
