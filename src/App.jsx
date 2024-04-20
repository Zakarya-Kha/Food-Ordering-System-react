import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Ourfood from './components/Ourfood'
import Contact from './components/Contact'
import { cartContext } from './components/context/Context'

function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  const router = createBrowserRouter([
    {
        path: '/',
        element: <><Header /> <Home/> <Footer/></>,
    },
    {
        path: '/About',
        element: <><Header /> <About/> <Footer/></>,
    },
    {
      path: '/ourfood',
      element: <><Header /> <Ourfood/> <Footer/> </>
    },
    {
      path: '/contact',
      element: <><Header /> <Contact/> <Footer/> </>
    }
          
  ])

  return (
    <>
    <cartContext.Provider value={{cart, setCart}}>
    <RouterProvider router={router} />
    </cartContext.Provider>
    </>
  )
}

export default App
