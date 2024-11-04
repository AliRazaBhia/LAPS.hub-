import React from 'react'
import { useState, useEffect } from 'react'
import upArrow01 from '../assets/UpArrow01.png'


const BackToTop = () => {

    const [backToTop, setBackToTop] = useState(false)

    useEffect(()=>{
       const handleScroll =  ()=>{
            if(window.scrollY > 100){
                setBackToTop(true)
            }
            else{
                setBackToTop(false)
            }
        };
    
    window.addEventListener("scroll", handleScroll)
    
   return ()=>{
    window.removeEventListener("scroll", handleScroll)
   }
})
    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }
        )
    }

    return (
        <div>

         (
            <button  className={`text-red-900 flex justify-center items-center rounded-md font-black bg-white bg-opacity-50 fixed h-8 w-8 bottom-[40px] right-[50px] p-5 text-xl backdrop-blur-md shadow-2xl transition-opacity  duration-400 animate-bounce hover:bg-opacity-100 hover:text-black ${backToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
            style={{ transition: 'opacity 0.3s ease' }}onClick={scrollUp}>^</button>
        )
    
</div>
)
}

export default BackToTop