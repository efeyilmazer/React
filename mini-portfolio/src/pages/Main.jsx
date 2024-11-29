import React from 'react'
import Navbar from "../components/Navbar"
import NU from "../img/nisantasilogo.png"
import { FaHtml5, FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { DiDotnet } from 'react-icons/di'
import  Pj1 from "../img/1.png"
import  Pj3 from "../img/3.png"
import  Pj4 from "../img/4.png"
import  Pj6 from "../img/6.png"
import  Pj7 from "../img/7.png"
import  Pj8 from "../img/8.png"
import { IoMdDownload } from "react-icons/io";
import CV from "../uploads/efeyilmazer-cv.pdf"
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
      <div>
        <div className='flex flex-col items-center w-screen h-scroll bg-white/10 pt-14'>
          <h1 className='text-2xl pb-4 font-display'>Merhaba, Ben Efe!</h1>
          <p className='w-[1200px] text-xl text-center pb-12 max-md:w-[350px] max-sm:text-pretty'>2019 yılından itibaren Front-End kapsamında kendimi bir Software Developer gözetimi ve takibi altında geliştirmekteyim. <br/> Kendimi geliştirdiğim süre boyunca bu alanda 150'den fazla proje geliştirdim. Daha önce iki startup projesinde Front-End developer olarak yer aldım. Haftalık tasklar şeklinde çalıştığım projede takım çalışmasını ve sahada proje geliştirme deneyimini elde ettim. <br/> Hazırlık sınıfını okul birincisi olarak bitirdim ve ileri Düzey İngilizce bilgisine sahibim.</p>
          <div className='max-md:h-40 flex mb-12 bg-white/60 rounded-3xl p-8 drop-shadow-md shadow-inner overflow-hidden'>
            <img src={NU} className='w-48 max-sm:h-24'></img>
            <span className='flex justify-center flex-col'>
              <span className='flex justify-between items-center'>
              <h1 className='text-2xl mr-4 max-md:text-sm max-md:mb-4 max-md:pt-4'>Nişantaşı Üniversitesi / Yönetim Bilişim Sistemleri</h1>
              <h1 className='max-md:absolute max-md:invisible'>(2019-2024)</h1>
                </span>
                <h1 className='text-2xl max-md:text-sm max-md:mb-2'>Nişantaşı Üniversitesi / C1+ Advanced English</h1>
                <div className='flex items-center justify-between'>
                <h1 className='max-sm:invisible max-md:absolute'> Eğitim hayatım boyunca çeşitli projelerde yer aldım, <br/>
                  SQL ve .NET kullanarak Personel maaş takip programı geliştirdim. <br/>
                  React ile Tatil ve Uçak rezervasyonu uygulaması geliştirdim.</h1>
                  <a href={CV} download className='max-md:p-0 max-md:pr-2 max-md:pl-2 text-xl cursor-pointer flex items-center justify-center gap-2 border mb-4 pr-4 pl-4 pt-2 pb-2 bg-white/60 rounded-3xl'><IoMdDownload/>CV</a>
                </div>
            </span>
          </div>
          <div className='slider h-12 bg-white/70 pt-1 max-md:w-[1500px] max-md:mr-[1000px]'>
            <div className='list flex gap-12'>
              <span className='item item1 flex items-center justify-center gap-2 text-4xl text-[#ff5733]/50'><FaHtml5/>HTML</span>
              <span className='item item2 flex items-center justify-center gap-2 text-4xl text-[#2965f1]/50'><FaCss3Alt/>CSS</span>
              <span className='item item3 flex items-center justify-center gap-2 text-4xl text-[#f0db4f]/60'><BiLogoJavascript/>JavaScript</span>
              <span className='item item4 flex items-center justify-center gap-2 text-4xl text-[#007acc]/50'><BiLogoTypescript/>Typescript</span>
              <span className='item item5 flex items-center justify-center gap-2 text-4xl text-[#61DBFB]/50'><FaReact/>React</span>
              <span className='item item6 flex items-center justify-center gap-2 text-4xl text-[#764abc]/50'><TbBrandRedux/>Redux</span>
              <span className='item item7 flex items-center justify-center gap-2 text-4xl text-[#8892be]/50'><FaPhp/>PHP</span>
              <span className='item item8 flex items-center justify-center gap-2 text-4xl text-[#512BD4]/50'><DiDotnet/>.NET</span>
            </div>
          </div>
          <div className='slider2 h-44 bg-white/70 pt-1 mt-8 max-md:w-[1500px] max-md:ml-[1000px]'>
            <div onClick={() => navigate("/Projelerim")} className='list flex gap-12'>
              <span className='item1 w-64 h-96 pt-2 opacity-50 max-md:opacity-90 hover:opacity-100 transition-all cursor-pointer'><img className='rounded-3xl' src={Pj8} alt="" /></span>
              <span className='item2 w-64 h-96 pt-2 opacity-50 max-md:opacity-90 hover:opacity-100 transition-all cursor-pointer'><img className='rounded-3xl' src={Pj4} alt="" /></span>
              <span className='item3 w-64 h-96 pt-2 opacity-50 max-md:opacity-90 hover:opacity-100 transition-all cursor-pointer'><img className='rounded-3xl' src={Pj3} alt="" /></span>
              <span className='item4 w-64 h-96 pt-2 opacity-50 max-md:opacity-90 hover:opacity-100 transition-all cursor-pointer'><img className='rounded-3xl' src={Pj7} alt="" /></span>
              <span className='item5 w-64 h-96 pt-2 opacity-50 max-md:opacity-90 hover:opacity-100 transition-all cursor-pointer'><img className='rounded-3xl' src={Pj1} alt="" /></span>
              <span className='item6 w-64 h-96 pt-2 opacity-50 max-md:opacity-90 hover:opacity-100 transition-all cursor-pointer'><img className='rounded-3xl' src={Pj6} alt="" /></span>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Main