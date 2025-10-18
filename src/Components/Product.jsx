import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product({product}) {

    const {id,title,category,image,price,} = product
    const navigate = useNavigate()

  return (
    <div className='Card'>
      <div className='h-full flex items-center row-span-3'>
        <img className='' src={image} alt="Product_Img" />
      </div>
      <div className='size-full'>
        <h2 className='text-sm'>{title}</h2>
        <h4 className='text-lg font-bold'>#{category}</h4>
        <h2 className='text-xl font-extrabold'>{price}$</h2>
        <div className='w-full flex items-center justify-center'>
          <button onClick={()=>navigate('/Product-Detail/'+id)} className='border-2 border-[#7f7f7f] rounded-xl px-5'>Details</button>
        </div>
      </div>
    </div>
  )
}
