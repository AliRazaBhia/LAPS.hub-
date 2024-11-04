import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const cart = useSelector(state => state.Cart)
  return (
    <div className=''>
        <div className='font-inter flex bg-black text-white justify-between  '> 
            <div className='font-bold '>
                <span>LAPS.hub</span>
            </div>
            <div className='flex gap-4 justify-evenly '>
               <NavLink className={({isActive}) => isActive ? "text-yellow-400 transition ease-in-out duration-150" : "text-white" } to="/"> <span>Home</span></NavLink>
               <NavLink className={({isActive}) => isActive ? "text-yellow-400 transition ease-in-out duration-150" : "text-white" }to="/explore"><span>Explore</span></NavLink> 
                <NavLink className={({isActive}) => isActive ? "text-yellow-400 transition ease-in-out duration-150" : "text-white" } to="/cart">
                  <div className='relative'>
                     <span>Cart</span>
                     {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-yellow-600 text-xs w-4 h-4 
                  flex justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
                     
                  </div>
                  </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar