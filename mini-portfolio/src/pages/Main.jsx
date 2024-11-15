import React from 'react'
import Navbar from "../components/Navbar"
import Ito from "../img/ito.jpg"
import Raven from "../img/ravensoft.png"
import SBU from "../img/sbu.webp"
import TKBB from "../img/tkbb.jpg"
import Payna from "../img/payna.jpg"
import NU from "../img/nisantasilogo.png"

const Main = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center w-screen h-scroll bg-white/10 pt-14'>
          <h1 className='text-2xl pb-4 font-display'>Merhaba, Ben Efe!</h1>
          <p className='w-[1200px] text-xl text-center pb-8'>2019 yılından itibaren Front-End kapsamında kendimi bir Software Developer gözetimi ve takibi altında geliştirmekteyim. <br/> Kendimi geliştirdiğim süre boyunca bu alanda 150'den fazla proje geliştirdim. Daha önce iki startup projesinde Front-End developer olarak yer aldım. Haftalık tasklar şeklinde çalıştığım projede takım çalışmasını ve sahada proje geliştirme deneyimini elde ettim. <br/> Hazırlık sınıfını okul birincisi olarak bitirdim ve ileri Düzey İngilizce bilgisine sahibim.</p>
          <div className='flex mb-24 bg-white/60 rounded-3xl p-8 drop-shadow-md shadow-inner'>
            <img src={NU} className='w-48'></img>
            <span className='flex justify-center flex-col'>
              <span className='flex justify-between items-center'>
              <h1 className='text-2xl mr-4'>Nişantaşı Üniversitesi / Yönetim Bilişim Sistemleri</h1>
              <h1>(2019-2024)</h1>
                </span>
                <h1 className='text-2xl'>Nişantaşı Üniversitesi / C1+ Advanced English</h1>
              <h1> Eğitim hayatım boyunca çeşitli projelerde yer aldım, <br/>
                  SQL ve .NET kullanarak Personel maaş takip programı geliştirdim. <br/>
                  React ile Tatil ve Uçak rezervasyonu uygulaması geliştirdim.</h1>
            </span>
          </div>
          <div className='w-screen'>
            <h1 className='text-3xl ml-24 font-display bg-white/90 w-max h-14 rounded-t-xl p-2 shadow-inner border-t'>Profesyonel Tecrübelerim :</h1>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white/90 rounded-2xl drop-shadow-md p-4 ml-8 mr-8 mb-4'>
              <img src={Ito} className='w-96 h-48 drop-shadow-md shadow-inner rounded-2xl mr-12'/>
              <span>
                <div className='flex justify-between'>
                  <h1 className='text-2xl'> İstanbul Ticaret Odası .NET Developer</h1>
                  <h1 className='text-xl'>(2 Ay Stajer)</h1>
                  </div>
              <p className='w-[950px]'> &gt; .NET Core ve ASP.NET teknolojileriyle yazılım geliştirme süreçlerine aktif katılım sağladım. <br/>
              &gt; Veritabanı yönetimi için SQL Server kullanarak sorgu yazma ve veri işlemlerine katkı sundum. <br/>
              &gt; Web API geliştirme süreçlerinde backend işlemleri gerçekleştirdim ve RESTful API entegrasyonunu sağladım. <br/>
              &gt; Agile (Scrum) metodolojisi ile çalışan ekiplerde sprintlere katılarak yazılım geliştirme süreçlerini öğrendim. <br/>
              &gt; Kullanıcı arayüzü (UI) tasarımlarında HTML, CSS ve JavaScript ile uygulama geliştirme süreçlerine katkı sağladım. <br/>
              &gt; Modül entegrasyonu ve test edilmesi aşamalarında yazılımın doğruluğunu sağlamak için entegrasyon testleri gerçekleştirdim.</p>
              </span>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white/90 rounded-2xl drop-shadow-md shadow-inner p-4 ml-8 mr-8'>
              <img src={Raven} className='w-96 h-48 drop-shadow-md shadow-inner rounded-2xl mr-12'/>
              <span>
                <div className='flex justify-between'>
                <h1 className='text-2xl'>Ravensoft React Developer</h1>
                <h1 className='text-xl'>(6 Ay)</h1>
                </div>
                <p className='w-[950px]'>&gt; React.js ve Redux kullanarak dinamik e-ticaret web siteleri geliştirdim ve mevcut projelere özellikler ekledim. <br/>
              &gt; Kullanıcı dostu arayüzler oluşturmak için HTML, CSS ve JavaScript ile responsive ve modern tasarımlar gerçekleştirdim. <br/>
              &gt; E-ticaret sitesi için ürün listeleme, sepet, ödeme işlemleri gibi kritik işlevlerin geliştirilmesini sağladım.  <br/>
              &gt; RESTful API'ler ile veri entegrasyonu yaparak ürün bilgilerini, kullanıcı sepetlerini ve sipariş durumlarını dinamik olarak çektim. <br/>
              &gt; Arama, filtreleme ve sıralama gibi özelliklerini geliştirmek için React state yönetimi ve component yapısını optimize ettim. <br/>
              &gt; Hataların tespiti ve çözümü için Jest ve React Testing Library kullanarak birim testleri ve entegrasyon testleri gerçekleştirdim.</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-3xl ml-24 mt-12 font-display bg-white/90 w-max h-14 rounded-t-xl p-2 shadow-inner border-t'>Freelance Projelerim :</h1>
          <div className='hover:scale-105 transition-all flex items-center justify-around bg-white/90 rounded-2xl drop-shadow-md p-4 ml-8 mr-8'>
              <span>
                <div className='flex justify-between'>
                  <h1 className='text-2xl'>Türkiye Katılım Bankaları Birliği Websitesi:</h1>
                  <h1 className='text-xl'>(Destek)</h1>
                  </div>
              <p className='w-[950px]'> &gt; .NET Core ve ASP.NET teknolojileriyle yazılım geliştirme süreçlerine aktif katılım sağladım. <br/>
              &gt; Veritabanı yönetimi için SQL Server kullanarak sorgu yazma ve veri işlemlerine katkı sundum. <br/>
              &gt; Web API geliştirme süreçlerinde backend işlemleri gerçekleştirdim ve RESTful API entegrasyonunu sağladım. <br/>
              &gt; Agile (Scrum) metodolojisi ile çalışan ekiplerde sprintlere katılarak yazılım geliştirme süreçlerini öğrendim. <br/>
              &gt; Kullanıcı arayüzü (UI) tasarımlarında HTML, CSS ve JavaScript ile uygulama geliştirme süreçlerine katkı sağladım. <br/>
              &gt; Modül entegrasyonu ve test edilmesi aşamalarında yazılımın doğruluğunu sağlamak için entegrasyon testleri gerçekleştirdim.</p>
              </span>
              <img src={TKBB} className='w-96 drop-shadow-md shadow-inner rounded-2xl mr-12 w-96 h-48'/>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white/90 rounded-2xl drop-shadow-md shadow-inner p-4 m-8'>
              <span>
                <div className='flex justify-between'>
                <h1 className='text-2xl'>Sağlık Bilimleri Üniversitesi Websitesi</h1>
                <h1 className='text-xl'>(Destek)</h1>
                </div>
                <p className='w-[950px]'>&gt; React.js ve Redux kullanarak dinamik e-ticaret web siteleri geliştirdim ve mevcut projelere özellikler ekledim. <br/>
              &gt; Kullanıcı dostu arayüzler oluşturmak için HTML, CSS ve JavaScript ile responsive ve modern tasarımlar gerçekleştirdim. <br/>
              &gt; E-ticaret sitesi için ürün listeleme, sepet, ödeme işlemleri gibi kritik işlevlerin geliştirilmesini sağladım.  <br/>
              &gt; RESTful API'ler ile veri entegrasyonu yaparak ürün bilgilerini, kullanıcı sepetlerini ve sipariş durumlarını dinamik olarak çektim. <br/>
              &gt; Arama, filtreleme ve sıralama gibi özelliklerini geliştirmek için React state yönetimi ve component yapısını optimize ettim. <br/>
              &gt; Hataların tespiti ve çözümü için Jest ve React Testing Library kullanarak birim testleri ve entegrasyon testleri gerçekleştirdim.</p>
              </span>
              <img src={SBU} className='w-96 drop-shadow-md shadow-inner rounded-2xl mr-12'/>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white/90 rounded-2xl drop-shadow-md shadow-inner p-4 m-8'>
              <span>
                <div className='flex justify-between'>
                <h1 className='text-2xl'>Payna Yazılım ve Danışmanlık Websitesi</h1>
                <h1 className='text-xl'>(Teslim)</h1>
                </div>
                <p className='w-[950px]'>&gt; React.js ve Redux kullanarak dinamik e-ticaret web siteleri geliştirdim ve mevcut projelere özellikler ekledim. <br/>
              &gt; Kullanıcı dostu arayüzler oluşturmak için HTML, CSS ve JavaScript ile responsive ve modern tasarımlar gerçekleştirdim. <br/>
              &gt; E-ticaret sitesi için ürün listeleme, sepet, ödeme işlemleri gibi kritik işlevlerin geliştirilmesini sağladım.  <br/>
              &gt; RESTful API'ler ile veri entegrasyonu yaparak ürün bilgilerini, kullanıcı sepetlerini ve sipariş durumlarını dinamik olarak çektim. <br/>
              &gt; Arama, filtreleme ve sıralama gibi özelliklerini geliştirmek için React state yönetimi ve component yapısını optimize ettim. <br/>
              &gt; Hataların tespiti ve çözümü için Jest ve React Testing Library kullanarak birim testleri ve entegrasyon testleri gerçekleştirdim.</p>
              </span>
              <img src={Payna} className='w-96 h-48  drop-shadow-md shadow-inner rounded-2xl mr-12'/>
            </div>
        </div>
    </div>
  )
}

export default Main