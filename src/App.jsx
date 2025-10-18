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
  const {colors} = useSelector((store)=> store.Color)
  const {Conteiner , Content , Shadow , Text , Border } = colors

  useEffect(()=>{
    dispatch(setTotalCount())
  },[])

  console.log(Content);
  return (
    <div>
        <div className='size-20 absolute'style={{
          background:{Conteiner},
          color:{Text},
        }}>
          Hello
        </div>
      <MainContainer>
        <Header/>
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} onClose={()=>dispatch(setDrawer())} anchor='right'>
          <div className='p-10 bg-slate-500'>
              {products && products.map((product)=>{
                return(
                  <div key={product.id}>
                    <img src={product.image} alt="" />
                    <h1>{product.title}</h1>
                  </div>
                )})
              }
              <div>
                <h1 className='text-5xl font-bold'>{totalCount.toFixed(2)}$</h1>
              </div>
            </div>
        </Drawer>
      </MainContainer>
    </div>
  )
}

export default App
