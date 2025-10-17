import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/ProductsSlice'
import Product from './Product'
import '../CSS/Products.css'

export default function ProductsList() {
    
    const Dispatch = useDispatch()
    const {products} = useSelector((store) => store.Product)
    
    useEffect(()=>{
        Dispatch(getAllProducts())
    },[])

    return (
        <div className='ProductList'>
            {
                products && products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}
