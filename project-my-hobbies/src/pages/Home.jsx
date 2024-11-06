import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center w-full h-full'>
    <div className='p-12 flex flex-col items-center justify-center gap-7 bg-[#385170] w-full h-screen'>
    <img className=' rounded-3xl w-2/4 h-[350px]' src="/src/img/ben.png" alt="" />
    <h1 className='text-4xl'>Merhaba !</h1>
    <p className='w-[700px] text-xl'>2019 yılından itibaren Front-End kapsamında kendimi bir Software Developer gözetimi ve takibi altında geliştirmekteyim.
Kendimi geliştirdiğim süre boyunca bu alanda 150'den fazla proje geliştirdim. Daha önce iki startup projesinde Front-End developer olarak yer aldım. Haftalık tasklar şeklinde çalıştığım projede takım çalışmasını ve sahada proje geliştirme deneyimini elde ettim.
Hazırlık sınıfını okul birincisi olarak bitirdim ve ileri Düzey İngilizce bilgisine sahibim.</p>
    <h1 className='text-2xl'>Bu projede hobilerimi react kullanarak etkin ve dinamik bir şekilde oluşturabilmeyi deneyeceğim.</h1>
    </div>
    </div>
  )
}

export default Home