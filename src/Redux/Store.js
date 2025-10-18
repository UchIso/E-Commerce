import { configureStore } from '@reduxjs/toolkit'
import AppRedux from './Slices/AppSlice'
import ProductsRedux from './Slices/ProductsSlice'
import BasketSlice from './Slices/BasketSlice'
import ColorSlice from './Slices/ColorSlice'

export const Store = configureStore({
  reducer: {
    App:AppRedux,
    Product:ProductsRedux,
    Basket:BasketSlice,
    Color:ColorSlice,
  },
})