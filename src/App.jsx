import { useState } from 'react'
import MainContainer from './Containers/MainContainer'
import Header from './Components/Header'
import './CSS/App.css'

function App() {

  return (
    <div>
      <MainContainer>
        <Header/>
      </MainContainer>
    </div>
  )
}

export default App
