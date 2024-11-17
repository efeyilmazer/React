import React from 'react'
import Ben from "../img/Ben.jpeg"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
<div className='flex flex-col items-center'>
<div className='bg-white w-screen h-20 flex justify-center items-center drop-shadow-md shadow-inner mt-8 gap-4'>
            <h1 className='text-3xl text-end w-[250px] font-display max-sm:text-xl'>&lt; Efe <br/> Yılmazer</h1>
            <img className='rounded-full w-32 shadow-md shadow-current' src={Ben}></img>
            <h1 className='text-3xl w-[250px] font-display max-sm:text-xl'>React Developer /&gt;</h1>
            <div className='absolute right-2 bottom-0'>
            <a href="github.com/efeyilmazer" target='blank' class=" font-display mt-8 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black hover:text-[17px] transition-all max-sm:invisible animate-pulse">&gt; github.com/efeyilmazer</a>
            </div>
    </div>
    <div className='flex items-center justify-center w-[720px] text-xl'>
      <span>
        <button href="#tecrube" className=' bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100'><a href="#tecrube">Tecrübelerim</a></button>
        <button className=' mr-16 ml-4 bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100'><a href="#freelance">Freelance</a></button>
      </span>
      <span>
        <button className=' ml-16 mr-4 bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100'><a href="#projelerim">Projelerim</a></button>
        <button className=' bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100'><a href="#iletisim">İletişim</a></button>
      </span>
    </div>
</div>



  )
}

export default Navbar