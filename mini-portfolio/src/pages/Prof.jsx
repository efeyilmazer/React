import React from 'react'
import Ito from "../img/ito.jpg"
import Raven from "../img/ravensoft.png"
import Navbar from '../components/Navbar'

const Prof = () => {
  return (
    <div>
        <Navbar/>
          <div className='flex flex-col justify-center items-center'>
             <h1 className='text-4xl mt-12 mb-4 font-display max-md:text-2xl'>Profesyonel Tecrübelerim</h1>
             <p className='max-w-[1200px] text-center text-xl max-md:text-sm max-md:pr-4 max-md:pl-4'>Çalışma Hayatıma İstanbul Ticaret Odası'nda ofis üstlerimin sınavı sonucunda projenin geliştirme ekibine kabul edilerek başladım. React ve .NET geliştirdiğimiz iki adet projenin geliştirme ekibinde yer aldım.</p>
             <br></br>
             <p className='max-w-[1200px] text-center text-xl max-md:text-sm max-md:pr-4 max-md:pl-4'>Ravensoft şirketinde Tam zamanlı olarak React geliştirme ekibinde ve Wordpress destek ekibinde yer aldım, Aynı zamanda şirketin ortağı olan Magento.tr'nin danışman geliştiriciliğini yaptım. Bu şirketteki pozisyonumda ağırlıklı olarak React geliştirdim.</p>
             <span className='w-[750px] h-2 bg-slate-700/20  mt-4 mb-16 rounded-full'></span>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md p-4 mb-8 max-sm:flex-col w-screen'>
              <img src={Ito} className='w-96 h-48 drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
              <span>
                <div className='flex justify-between max-sm:flex-col'>
                  <h1 className='text-2xl mb-2 max-md:text-xl'>İstanbul Ticaret Odası .NET Developer</h1>
                  <h1 className='text-xl max-md:text-sm'>(2 Ay Stajer)</h1>
                  </div>
              <p className='w-[950px] max-sm:invisible max-sm:absolute'> &gt; .NET Core ve ASP.NET teknolojileriyle yazılım geliştirme süreçlerine aktif katılım sağladım. <br/>
              &gt; Veritabanı yönetimi için SQL Server kullanarak sorgu yazma ve veri işlemlerine katkı sundum. <br/>
              &gt; Web API geliştirme süreçlerinde backend işlemleri gerçekleştirdim ve RESTful API entegrasyonunu sağladım. <br/>
              &gt; Agile (Scrum) metodolojisi ile çalışan ekiplerde sprintlere katılarak yazılım geliştirme süreçlerini öğrendim. <br/>
              &gt; Kullanıcı arayüzü (UI) tasarımlarında HTML, CSS ve JavaScript ile uygulama geliştirme süreçlerine katkı sağladım. <br/>
              &gt; Modül entegrasyonu ve test edilmesi aşamalarında yazılımın doğruluğunu sağlamak için entegrasyon testleri gerçekleştirdim.</p>
              </span>
            </div>
            <div className='hover:scale-105 transition-all flex items-center justify-around bg-white drop-shadow-md shadow-inner p-4 mb-12 max-sm:flex-col w-screen'>
              <img src={Raven} className='w-96 h-48 drop-shadow-md shadow-inner rounded-2xl mr-12 max-sm:mr-0'/>
              <span>
                <div className='flex justify-between max-sm:flex-col'>
                <h1 className='text-2xl mb-2 max-md:text-xl'>Ravensoft React Developer</h1>
                <h1 className='text-xl max-md:text-sm'>(6 Ay)</h1>
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
  )
}

export default Prof