import React from 'react'
import Navbar from "../components/Navbar"
import Ito from "../img/ito.jpg"
import Raven from "../img/ravensoft.png"
import SBU from "../img/sbu.webp"
import TKBB from "../img/tkbb.jpg"
import Payna from "../img/payna.jpg"
import NU from "../img/nisantasilogo.png"
import { FaHtml5, FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { DiDotnet } from 'react-icons/di'
import Prof from './Prof'

const Main = () => {
  return (
    <div>
        <Navbar />
      <div>
        <div className='flex flex-col items-center w-screen h-scroll bg-white/10 pt-14'>
          <h1 className='text-2xl pb-4 font-display'>Merhaba, Ben Efe!</h1>
          <p className='w-[1200px] text-xl text-center pb-12 max-sm:w-[450px] max-sm:text-pretty'>2019 yılından itibaren Front-End kapsamında kendimi bir Software Developer gözetimi ve takibi altında geliştirmekteyim. <br/> Kendimi geliştirdiğim süre boyunca bu alanda 150'den fazla proje geliştirdim. Daha önce iki startup projesinde Front-End developer olarak yer aldım. Haftalık tasklar şeklinde çalıştığım projede takım çalışmasını ve sahada proje geliştirme deneyimini elde ettim. <br/> Hazırlık sınıfını okul birincisi olarak bitirdim ve ileri Düzey İngilizce bilgisine sahibim.</p>
          <div className='max-sm:h-48 flex mb-12 bg-white/60 rounded-3xl p-8 drop-shadow-md shadow-inner'>
            <img src={NU} className='w-48 max-sm:h-32'></img>
            <span className='flex justify-center flex-col'>
              <span className='flex justify-between items-center'>
              <h1 className='text-2xl mr-4 max-sm:text-xl'>Nişantaşı Üniversitesi / Yönetim Bilişim Sistemleri</h1>
              <h1 className='max-sm:absolute max-sm:invisible'>(2019-2024)</h1>
                </span>
                <h1 className='text-2xl max-sm:absolute max-sm:invisible'>Nişantaşı Üniversitesi / C1+ Advanced English</h1>
              <h1 className='max-sm:invisible max-sm:absolute'> Eğitim hayatım boyunca çeşitli projelerde yer aldım, <br/>
                  SQL ve .NET kullanarak Personel maaş takip programı geliştirdim. <br/>
                  React ile Tatil ve Uçak rezervasyonu uygulaması geliştirdim.</h1>
            </span>
          </div>
          <div className='slider h-12 bg-white/70 pt-1 max-sm:invisible'>
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
        </div>
        </div>
    </div>
  )
}

export default Main