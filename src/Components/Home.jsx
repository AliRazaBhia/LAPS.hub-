import React from 'react'
import './Home.css'
import shoeImg from '../assets/shoeImage02.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='mainContainer'>
        <div className='bodyContainer'>
            <div className='shoeimg_div'>
                <img className='shoe_img' src={shoeImg} alt="" />
            </div>
            <div className='paragraph_div'>
                <p className='main_paragraph'>Your go-to spot for stylish sneakers and joggers. Discover the perfect blend of comfort and style to elevate your game. Step in and find your next favorite pair today!

</p>
                <div>
                  <NavLink to='/explore'><button className='button_explore'>Explore More</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home