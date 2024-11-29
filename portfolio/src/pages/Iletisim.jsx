import React from 'react'
import Navbar from '../components/Navbar'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Iletisim = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-12 font-display mb-4 max-md:text-2xl'>İletişim Bilgilerim</h1>
      <span className='max-w-[1000px] text-center'>
      </span>
      <span className='w-[750px] h-2 bg-slate-700/20 mt-4 mb-16 rounded-full'></span>
      </div>
      <div className='flex justify-center items-center flex-col gap-2'>
        <span className='flex justify-center items-center gap-2 text-2xl'>
          <FaPhoneAlt/>
          <h1>+90 539 897 38 75</h1>
        </span>
        <span className='flex justify-center items-center gap-2 text-2xl mb-2'>
          <IoIosMail/>
          <h1>efeyilmazer.dev@gmail.com</h1>
        </span>

        <div className='flex items-center justify-center gap-2 mb-8'>
    <span className='text-3xl cursor-pointer active:scale-90'><a href="http://github.com/efeyilmazer" target='_blank'><FaGithubSquare color='#2b3137'/></a></span>
    <span className='text-3xl cursor-pointer active:scale-90'><a href="http://linkedin.com/in/efe-y%C4%B1lmazer-19b822228/" target='_blank'><FaLinkedin color='#0077B5'/></a></span>
    <span className='text-3xl cursor-pointer active:scale-90'><a href="http://instagram.com/efeyilmazer.1" target='_blank'><FaInstagramSquare color='#C13584'/></a></span>
  </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12039.057536883003!2d29.105069872229006!3d41.03041046600982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1732478648982!5m2!1str!2str" width="1200" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mb-12 max-md:w-96 max-md:h-72'></iframe>
      </div>
    </div>
  )
}

export default Iletisim