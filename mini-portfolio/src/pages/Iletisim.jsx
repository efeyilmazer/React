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
      <h1 className='text-4xl mt-12 font-display mb-4'>İletişim Bilgilerim</h1>
      <span className='max-w-[1000px] text-center'>
      </span>
      <span className='w-[750px] h-2 bg-slate-700/20 mt-4 mb-16 rounded-full'></span>
      </div>
      <div className='flex justify-center items-center flex-col gap-2'>
        <span className='flex justify-center items-center gap-2 text-2xl'>
          <FaPhoneAlt/>
          <h1>+90 539 897 38 75</h1>
        </span>
        <span className='flex justify-center items-center gap-2 text-2xl mb-12'>
          <IoIosMail/>
          <h1>efeyilmazer.dev@gmail.com</h1>
        </span>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12039.057536883003!2d29.105069872229006!3d41.03041046600982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1732478648982!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Iletisim