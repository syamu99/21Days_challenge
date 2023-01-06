import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios';
import './products.css'
import LocationCards from '../CardsDisplay/LocationCards';

const Products = () => {
    const [data1, setData1] = useState();
     const productData=async ()=>{
      const result=await axios.get('https://fakestoreapi.com/products')
      const final=result.data
      console.log(final)
      setData1(final)
        }
      
    useEffect(() => {
      productData();
},[])

  return (
    <div className='imagelist'>
      
      {/* {data1?.map((item)=>
      (<ul className='Productimages'><li key={item.id}><img src={item.image} alt="Product images"/></li> </ul>
      ))} */}
     <LocationCards data1={data1}/>
    </div>
  );
}

export default Products 
