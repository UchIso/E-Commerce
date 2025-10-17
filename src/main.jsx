import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store.js'

createRoot(document.getElementById('Main')).render(
   <Provider store={Store}>
        <App />
   </Provider>
)
