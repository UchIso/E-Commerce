import { configureStore } from '@reduxjs/toolkit'
import AppRedux from './Slices/AppSlice'
import ProductsRedux from './Slices/ProductsSlice'
import BasketSlice from './Slices/BasketSlice'

export const Store = configureStore({
  reducer: {
    App:AppRedux,
    Product:ProductsRedux,
    Basket:BasketSlice,
  },
})