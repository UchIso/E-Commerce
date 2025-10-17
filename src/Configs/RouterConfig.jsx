import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import ProductDetail from '../Pages/ProductDetail'

export default function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Product-Detail/:id' element={<ProductDetail/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
  )
}
