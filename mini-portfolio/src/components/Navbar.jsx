import React from 'react'
import Ben from "../img/Ben.jpeg"

const Navbar = () => {
  return (
    <div className='bg-white w-screen h-20 flex justify-center items-center drop-shadow-md shadow-inner mt-8 gap-4'>
            <h1 className='text-3xl text-end w-[250px] font-display'>&lt; Efe <br/> Yılmazer</h1>
            <img className='rounded-full w-32 shadow-md shadow-current' src={Ben}></img>
            <h1 className='text-3xl w-[250px] font-display'>React Developer /&gt;</h1>
            <div className='absolute right-2 bottom-0'>
            <a href="github.com/efeyilmazer" target='blank' class=" font-display mt-8 relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black hover:text-[17px] transition-all">&gt; github.com/efeyilmazer</a>
            </div>
    </div>



  )
}

export default Navbar