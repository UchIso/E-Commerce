import { useState } from 'react'
import MainContainer from './Containers/MainContainer'
import Header from './Components/Header'
import './CSS/App.css'
import ProductsList from './Components/ProductsList'

function App() {

  return (
    <div>
      <MainContainer>
        <Header/>
        <ProductsList />
      </MainContainer>
    </div>
  )
}

export default App
