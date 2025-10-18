import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectProduct } from '../Redux/Slices/ProductsSlice';
import { FaRegStar , FaRegStarHalfStroke , FaStar } from "react-icons/fa6";
import { FaPlus  , FaMinus , FaShoppingBasket } from "react-icons/fa";
import { addtoBasket } from '../Redux/Slices/BasketSlice';

export default function ProductDetail() {
    
    const Dispatch = useDispatch()

    const {id} = useParams()
    const {products , selectProduct} = useSelector((store) => store.Product )
    const {title,category,description,rating,image,price,} = selectProduct
    const [Count , setCount] = useState(0)

    useEffect(()=>{
        getProductById();
    },[])

    const increment = ()=>{
        setCount(Count + 1)
    }

    const decrement = ()=>{
        Count != 0? setCount(Count - 1) : Count
    }

    const AddBaskset = ()=>{
        const payload = {
            id,title,image,price,category,Count
        }
        Dispatch(addtoBasket(payload))
    }

    const getProductById = () => {
        products && products.map((product) => {
            if(product.id == id){
                Dispatch(setSelectProduct(product))
            }
        })
    }

    return (
        <div className='ProductDetails'>
            <img src={image} alt="Product_Image" />
            <div className='flex flex-col gap-5 text-xl'>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <h2>{description}</h2>
                <h2 className='text-2xl font-bold'>#{category}</h2>
                <h2 className='text-4xl font-extrabold'>{price}$</h2>
            {
                rating && rating.rate < 1? 

                    <div className='RatingStars'>
                        <h3><FaRegStarHalfStroke /></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div> 

                : rating && rating.rate == 1?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate < 2?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaRegStarHalfStroke /></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate == 2? 

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate < 3?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaRegStarHalfStroke/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate == 3?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaRegStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate < 4?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaRegStarHalfStroke/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate == 4?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaRegStar/></h3>
                    </div>

                : rating && rating.rate < 5?

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaRegStarHalfStroke/></h3>
                    </div>

                :

                    <div className='RatingStars'>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                        <h3><FaStar/></h3>
                    </div>
                }
                <div className='flex gap-5'>
                    <div className='flex items-center justify-center px-2 gap-5 border-[#7f7f7f] border-2 rounded-3xl'>
                        <button onClick={increment}><FaPlus /></button>
                        <h3 className='text-3xl font-extrabold' >{Count}</h3>
                        <button onClick={decrement}><FaMinus /></button>
                    </div>
                    <button onClick={AddBaskset} className='flex gap-2 items-center justify-center border-[#7f7f7f] border-2 rounded-2xl px-2 font-bold'>Add Basket <FaShoppingBasket/></button>
                </div>
            </div>
        </div>
    )
}
