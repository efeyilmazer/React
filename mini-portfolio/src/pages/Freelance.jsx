import React from 'react'
import Navbar from '../components/Navbar'
import SBU from "../img/sbu.webp"
import TKBB from "../img/tkbb.jpg"
import Payna from "../img/payna.jpg"

const Freelance = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-12 font-display mb-4 max-md:text-2xl'>Freelance Projelerim</h1>
      <span className='max-w-[1200px] text-center'>
      <p className='text-xl'>Bu proje sahiplerinin destek için bana başvurmasını beni yetiştiren referanslarıma borçluyum.</p>
      <p className='text-xl'>İçinde bulunduğum üç projede de React kullanarak çeşitli componentler ve sayfalar geliştirdim, iki projede geliştirme ekibindeydim ve bir projeyi baştan aşağı kendim geliştirip teslim ettim. </p>
      </span>
      <span className='w-[750px] h-2 bg-slate-700/20 mt-4 mb-16 rounded-full'></span>

          <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md max-sm:flex-col-reverse w-full p-4'>
          <img src={TKBB} className='w-96 drop-shadow-md shadow-inner rounded-2xl mr-12 w-96 h-48 max-sm:mr-0'/>
              <span>
                <div className='flex justify-between max-sm:flex-col'>
                  <h1 className='text-2xl mb-2'>Türkiye Katılım Bankaları Birliği Websitesi</h1>
                  <h1 className='text-xl'>(Destek)</h1>
                  </div>
              <p className='w-[950px] max-sm:invisible max-sm:absolute'> &gt; Web uygulamaları ve kullanıcı arayüzleri oluşturmak için React.js framework'ünü kullanarak komponentler geliştirdim <br/>
              &gt; React Hooks ve Class Components kullanarak fonksiyonel ve sınıf tabanlı komponentler oluşturdum. <br/>
              &gt; Web API geliştirme süreçlerinde backend işlemleri gerçekleştirdim ve RESTful API entegrasyonunu sağladım. <br/>
              &gt; Kullanıcı arayüzü (UI) tasarımlarında HTML, CSS ve JavaScript ile uygulama geliştirme süreçlerine katkı sağladım.</p>
              </span>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md shadow-inner p-4 mt-8 max-sm:flex-col-reverse w-full'>
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
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md shadow-inner mt-8 mb-20 p-4 max-sm:flex-col-reverse w-full'>
            <img src={Payna} className='w-96 h-48  drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
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
            </div>
          </div>
    </div>
  )
}

export default Freelance