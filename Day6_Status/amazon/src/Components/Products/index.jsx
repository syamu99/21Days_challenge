import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios';

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
    <div>
      <ul className='Productimages'>
      {data1?.map((item)=>
      (<li key={item.id}><img src={item.image} alt="Product images"/></li>
      ))}
      </ul>
    </div>
  );
}

export default Products
