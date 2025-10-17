import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/ProductsSlice'

export default function ProductsList() {
    
    const Dispatch = useDispatch()
    const {products} = useSelector((store) => store.Product)
    
    console.log(products);

    useEffect(()=>{
        Dispatch(getAllProducts())
    },[])

    return (
        <div>ProductsList</div>
    )
}
