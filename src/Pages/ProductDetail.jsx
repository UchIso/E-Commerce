import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectProduct } from '../Redux/Slices/ProductsSlice';

export default function ProductDetail() {
    
    const Dispatch = useDispatch()

    const {id} = useParams()
    const {products , selectProduct} = useSelector((store) => store.Product )

    useEffect(()=>{
        getProductById();
    },[])

    const getProductById = () => {
        products && products.map((product) => {
            if(product.id == id){
                Dispatch(setSelectProduct(product))
            }
        })
    }


    console.log(selectProduct);
    console.log(id);
    return (
        <div>Product Detail Page</div>
    )
}
