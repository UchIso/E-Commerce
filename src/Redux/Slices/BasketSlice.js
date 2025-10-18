import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = ()=>{
    if(localStorage.getItem("Basket")){
        return JSON.parse(localStorage.getItem("Basket"))
    }
    return []
}

const BasketState = {
    products: getBasketFromStorage(),
    drawer:false,
    totalCount:0
}

const writeFromBasketToStorage = (basket)=>{
    localStorage.setItem("Basket",JSON.stringify(basket))
}

export const BasketSlice = createSlice({
    name:"Basket",
    initialState:BasketState,
    reducers:{
        addtoBasket: (state,action)=>{
            const FindProduct = state.products && state.products.find((product)=> product.id == action.payload.id)
            if(FindProduct){
                const extractedProducts = state.products.filter((product)=> product.id != action.payload.id)
                FindProduct.Count += action.payload.Count 
                state.products = [...extractedProducts,FindProduct]
                writeFromBasketToStorage(state.products)
            }else{
                state.products = [...state.products , action.payload]
                writeFromBasketToStorage(state.products)
            }
        },
        setDrawer:(state)=>{
            state.drawer = !state.drawer
        },
        setTotalCount:(state)=>{
            state.totalCount = 0
            state.products && state.products.map((product)=>{
                state.totalCount += product.price * product.Count
            })
        }
    },
})

export const {addtoBasket,setDrawer,setTotalCount} = BasketSlice.actions
export default BasketSlice.reducer