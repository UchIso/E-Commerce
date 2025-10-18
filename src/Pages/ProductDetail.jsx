import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectProduct } from '../Redux/Slices/ProductsSlice';
import { FaRegStar , FaRegStarHalfStroke , FaStar } from "react-icons/fa6";

export default function ProductDetail() {
    
    const Dispatch = useDispatch()

    const {id} = useParams()
    const {products , selectProduct} = useSelector((store) => store.Product )
    const {title,category,description,rating,image,price,} = selectProduct
    
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
            </div>
        </div>
    )
}
