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
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { DiDotnet } from 'react-icons/di'

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
          <div className='slider h-12'>
            <div className='list flex gap-12'>
              <span className='item item1 flex items-center justify-center gap-2 text-4xl text-[#ff5733]/50'><FaHtml5/>HTML</span>
              <span className='item item2 flex items-center justify-center gap-2 text-4xl text-[#2965f1]/50'><FaCss3Alt/>CSS</span>
              <span className='item item3 flex items-center justify-center gap-2 text-4xl text-[#f0db4f]/50'><BiLogoJavascript/>JavaScript</span>
              <span className='item item4 flex items-center justify-center gap-2 text-4xl text-[#007acc]/50'><BiLogoTypescript/>Typescript</span>
              <span className='item item5 flex items-center justify-center gap-2 text-4xl text-[#61DBFB]/50'><FaReact/>React</span>
              <span className='item item6 flex items-center justify-center gap-2 text-4xl text-[#764abc]/50'><TbBrandRedux/>Redux</span>
              <span className='item item7 flex items-center justify-center gap-2 text-4xl text-[#8892be]/50'><FaPhp/>PHP</span>
              <span className='item item8 flex items-center justify-center gap-2 text-4xl text-[#512BD4]/50'><DiDotnet/>.NET</span>
            </div>
          </div>
          <div>
            <h1 id='tecrube' className='text-xl mt-12 ml-24 bg-white w-max h-10 rounded-t-xl p-2 shadow-inner border-t max-sm:ml-5 max-sm:rounded-full'>Profesyonel Tecrübelerim :</h1>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md p-4 mb-4 max-sm:flex-col w-screen'>
              <img src={Ito} className='w-96 h-48 drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
              <span>
                <div className='flex justify-between max-sm:flex-col'>
                  <h1 className='text-2xl mb-2'>İstanbul Ticaret Odası .NET Developer</h1>
                  <h1 className='text-xl'>(2 Ay Stajer)</h1>
                  </div>
              <p className='w-[950px] max-sm:invisible max-sm:absolute'> &gt; .NET Core ve ASP.NET teknolojileriyle yazılım geliştirme süreçlerine aktif katılım sağladım. <br/>
              &gt; Veritabanı yönetimi için SQL Server kullanarak sorgu yazma ve veri işlemlerine katkı sundum. <br/>
              &gt; Web API geliştirme süreçlerinde backend işlemleri gerçekleştirdim ve RESTful API entegrasyonunu sağladım. <br/>
              &gt; Agile (Scrum) metodolojisi ile çalışan ekiplerde sprintlere katılarak yazılım geliştirme süreçlerini öğrendim. <br/>
              &gt; Kullanıcı arayüzü (UI) tasarımlarında HTML, CSS ve JavaScript ile uygulama geliştirme süreçlerine katkı sağladım. <br/>
              &gt; Modül entegrasyonu ve test edilmesi aşamalarında yazılımın doğruluğunu sağlamak için entegrasyon testleri gerçekleştirdim.</p>
              </span>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md shadow-inner p-4 mb-12 max-sm:flex-col'>
              <img src={Raven} className='w-96 h-48 drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
              <span>
                <div className='flex justify-between max-sm:flex-col'>
                <h1 className='text-2xl mb-2'>Ravensoft React Developer</h1>
                <h1 className='text-xl'>(6 Ay)</h1>
                </div>
                <p className='w-[950px] max-sm:invisible max-sm:absolute'>&gt; React.js ve Redux kullanarak dinamik e-ticaret web siteleri geliştirdim ve mevcut projelere özellikler ekledim. <br/>
              &gt; Kullanıcı dostu arayüzler oluşturmak için HTML, CSS ve JavaScript ile responsive ve modern tasarımlar gerçekleştirdim. <br/>
              &gt; E-ticaret sitesi için ürün listeleme, sepet, ödeme işlemleri gibi kritik işlevlerin geliştirilmesini sağladım.  <br/>
              &gt; RESTful API'ler ile veri entegrasyonu yaparak ürün bilgilerini, kullanıcı sepetlerini ve sipariş durumlarını dinamik olarak çektim. <br/>
              &gt; Arama, filtreleme ve sıralama gibi özelliklerini geliştirmek için React state yönetimi ve component yapısını optimize ettim. <br/>
              &gt; Hataların tespiti ve çözümü için Jest ve React Testing Library kullanarak birim testleri ve entegrasyon testleri gerçekleştirdim.</p>
              </span>
            </div>
          </div>
        </div>
        <div className='w-screen'>
          <h1 className='text-xl ml-24 mt-12 w-max h-10 rounded-t-xl bg-w bg-white p-2 shadow-inner border-t max-sm:ml-16' id='freelance' >Freelance Projelerim :</h1>
          <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md max-sm:flex-col-reverse'>
              <span>
                <div className='flex justify-between max-sm:flex-col'>
                  <h1 className='text-2xl mb-2'>Türkiye Katılım Bankaları Birliği Websitesi:</h1>
                  <h1 className='text-xl'>(Destek)</h1>
                  </div>
              <p className='w-[950px] max-sm:invisible max-sm:absolute'> &gt; Web uygulamaları ve kullanıcı arayüzleri oluşturmak için React.js framework'ünü kullanarak komponentler geliştirdim <br/>
              &gt; React Hooks ve Class Components kullanarak fonksiyonel ve sınıf tabanlı komponentler oluşturdum. <br/>
              &gt; Web API geliştirme süreçlerinde backend işlemleri gerçekleştirdim ve RESTful API entegrasyonunu sağladım. <br/>
              &gt; Kullanıcı arayüzü (UI) tasarımlarında HTML, CSS ve JavaScript ile uygulama geliştirme süreçlerine katkı sağladım.</p>
              </span>
              <img src={TKBB} className='w-96 drop-shadow-md shadow-inner rounded-2xl mr-12 w-96 h-48 max-sm:mr-0'/>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md shadow-inner p-4 mt-8 max-sm:flex-col-reverse'>
              <span>
                <div className='flex justify-between'>
                <h1 className='text-2xl mb-2'>Sağlık Bilimleri Üniversitesi Websitesi</h1>
                <h1 className='text-xl'>(Destek)</h1>
                </div>
                <p className='w-[950px] max-sm:invisible max-sm:absolute'>&gt; React.js ve Redux kullanarak dinamik olarak komponentler geliştirdim.<br/>
              &gt; Uygulama genelinde veri yönetimi için Redux, Context API gibi araçlar kullanarak global state yönetimi sağladım. <br/>
              &gt; Arama, filtreleme ve sıralama gibi özelliklerini geliştirmek için React state yönetimi ve component yapısını optimize ettim. <br/>
              &gt; Uygulama bileşenlerinin birbirleriyle olan etkileşimlerini ve lifecycle işlemlerini yönetmek.</p>
              </span>
              <img src={SBU} className='w-96 drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md shadow-inner mt-8 mb-8 p-4 max-sm:flex-col-reverse'>
              <span>
                <div className='flex justify-between'>
                <h1 className='text-2xl mb-2'>Payna Yazılım ve Danışmanlık Websitesi</h1>
                <h1 className='text-xl'>(Teslim)</h1>
                </div>
                <p className='w-[950px] max-sm:invisible max-sm:absolute'>&gt; Kullanıcı deneyimi için UI kitleri veya özel stiller kullanarak görsel olarak çekici ve kullanıcı dostu arayüzler oluşturdum. <br/>
              &gt; Web sayfalarının mobil uyumlu ve responsive olmasını sağladım. (Media Queries, Flexbox, Grid).<br/>
              &gt; React bileşenlerini test etmek için Jest, React Testing Library gibi araçlarla unit ve integration testleri yazdım.<br/>
              &gt; React uygulamaları için SEO uyumluluğu sağladım. (Server-Side Rendering, Static Site Generation gibi yöntemlerle).</p>
              </span>
              <img src={Payna} className='w-96 h-48  drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main