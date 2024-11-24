import React from 'react'
import Ben from "../img/Ben.jpeg"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate()
  return (
<div className='flex flex-col items-center'>
<div className='absolute left-2 top-[77px] z-40 flex items-center justify-center gap-2'>
    <span className='text-3xl opacity-50 hover:opacity-100 cursor-pointer active:scale-90'><a href="http://github.com/efeyilmazer" target='_blank'><FaGithubSquare color='#2b3137'/></a></span>
    <span className='text-3xl opacity-50 hover:opacity-100 cursor-pointer active:scale-90'><a href="http://linkedin.com/in/efe-y%C4%B1lmazer-19b822228/" target='_blank'><FaLinkedin color='#0077B5'/></a></span>
    <span className='text-3xl opacity-50 hover:opacity-100 cursor-pointer active:scale-90'><a href="http://instagram.com/efeyilmazer.1" target='_blank'><FaInstagramSquare color='#C13584'/></a></span>
  </div>
<div className='bg-white w-screen h-20 flex justify-center items-center drop-shadow-md shadow-inner mt-8 gap-4 z-30'>
            <h1 className='text-3xl text-end w-[250px] font-display max-sm:text-xl'>&lt; Efe <br/> Yılmazer</h1>
            <img className='rounded-full w-32 shadow-md shadow-current' src={Ben}></img>
            <h1 className='text-3xl w-[250px] font-display max-sm:text-xl'>React Developer /&gt;</h1>
            <div className='absolute right-2 bottom-0'>
            <a href="http://github.com/efeyilmazer" target='blank' class=" font-display mt-8 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black hover:text-[17px] transition-all max-sm:invisible animate-pulse">&gt; github.com/efeyilmazer</a>
            </div>
    </div>
    <div className='flex items-center justify-center w-[720px] text-xl'>
      <span>
        <button className=' bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100' onClick={() => navigate("/Tecrubelerim")}>Tecrübelerim</button>
        <button className=' mr-16 ml-4 bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100' onClick={() => navigate("/Freelance")}>Freelance</button>
      </span>
      <span onClick={() => navigate("/")} className='active:scale-100 bg-white w-24 h-24 absolute rounded-3xl drop-shadow-sm flex items-end pb-4 justify-center hover:drop-shadow-xl hover:scale-110 z-10 transition-all cursor-pointer'>
        <FaHome/>
      </span>
      <span>
        <button className=' ml-16 mr-4 bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100'onClick={() => navigate("/Projelerim")}>Projelerim</button>
        <button className=' bg-white w-32 h-12 rounded-b-2xl hover:drop-shadow-xl hover:scale-110 transition-all drop-shadow-sm active:scale-100' onClick={() => navigate("/Iletisim")}>İletişim</button>
      </span>
    </div>
</div>



  )
}

export default Navbar