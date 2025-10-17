import { configureStore } from '@reduxjs/toolkit'
import AppRedux from './Slices/AppSlice'
import ProductsRedux from './Slices/ProductsSlice'

export const Store = configureStore({
  reducer: {
    App:AppRedux,
    Product:ProductsRedux
  },
})