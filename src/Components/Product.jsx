import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product({product}) {

    const {id,title,category,image,price,} = product
    const navigate = useNavigate()

  return (
    <div className='Product'>
        <img src={image} alt="Product_Img" />
        <h2>{title}</h2>
        <h4>{category}</h4>
        <h2>{price}$</h2>
        <button onClick={()=>navigate('/Product-Detail/'+id)} className='border-2 border-black'>Details</button>
    </div>
  )
}
