import { useState } from 'react'
import MainContainer from './Containers/MainContainer'
import Header from './Components/Header'
import './CSS/App.css'
import RouterConfig from './Configs/RouterConfig'
import Loading from './Components/Loading'

function App() {

  return (
    <div>
      <MainContainer>
        <Header/>
        <RouterConfig />
        <Loading />
      </MainContainer>
    </div>
  )
}

export default App
