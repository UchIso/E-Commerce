import { useEffect, useState } from 'react'
import MainContainer from './Containers/MainContainer'
import Header from './Components/Header'
import './CSS/App.css'
import RouterConfig from './Configs/RouterConfig'
import Loading from './Components/Loading'
import { Drawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer, setTotalCount } from './Redux/Slices/BasketSlice'

function App() {

  const dispatch = useDispatch()
  const {products,drawer,totalCount} = useSelector((store)=> store.Basket)

  useEffect(()=>{
    dispatch(setTotalCount())
  },[])

  return (
    <div>
      <MainContainer>
        <Header/>
        <RouterConfig />
        <Loading />
        <Drawer sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#1b1b1b', // Arka plan rengini buraya istediğiniz gibi ayarlayın
        },
      }} open={drawer} onClose={()=>dispatch(setDrawer())} anchor='right'>
            {
              products && products.map((product)=>{
                return(
                <div>
                  <img src={product.image} alt="" />
                  <h1>{product.title}</h1>
                </div>
                )
              })
            }
            <div>
              {totalCount}
            </div>
        </Drawer>
      </MainContainer>
    </div>
  )
}

export default App
