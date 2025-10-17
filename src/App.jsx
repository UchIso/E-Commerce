import { useState } from 'react'
import MainContainer from './Containers/MainContainer'
import Header from './Components/Header'
import './CSS/App.css'
import RouterConfig from './Configs/RouterConfig'

function App() {

  return (
    <div>
      <MainContainer>
        <Header/>
        <RouterConfig />
      </MainContainer>
    </div>
  )
}

export default App
