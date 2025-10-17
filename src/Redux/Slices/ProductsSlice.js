import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com"
export const getAllProducts = createAsyncThunk("getAllProducts", async ()=>{
    const Respons = await axios.get(`${BASE_URL}/products`)
    return Respons.data
})

const Products = {
    products:[],
    selectProduct:{},
    loading:false
}

export const ProductsSlice = createSlice({
    name:"Product",
    initialState:Products,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending , (State) => {
            State.loading = true
        })
        builder.addCase(getAllProducts.fulfilled , (State,Action)=>{
            State.loading = false
            State.products = Action.payload
        })
    }
})

export const {} = ProductsSlice.actions
export default ProductsSlice.reducer