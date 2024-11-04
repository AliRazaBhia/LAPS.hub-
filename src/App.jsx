import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Explore from './Components/Explore'
import Preview from './Components/Preview'

const router = createBrowserRouter([{
  path:"/",
  element:
  <div>
      <Navbar/>
      <Home/>
    </div>
},
{
  path:"explore",
  element: <div>
    <Navbar/>
    <Explore/>
  </div>
},
{
  path:"Cart",
  element: <div>
    <Navbar/>
    <Cart/>
  </div>
},
{
  path:"preview/:id",
  element: 
  <div>
    <Navbar/>
  <Preview/>
  </div>
}
])


function App() {

  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
