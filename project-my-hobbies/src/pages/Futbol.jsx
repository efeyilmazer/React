import React from 'react'
import Alex from "../img/football/alex.webp"
import Roberto from "../img/football/roberto.webp"
import Volkan from "../img/football/volkan.jpg"
import Lugano from "../img/football/lugano.jpg"
import Aziz from "../img/football/aziz.webp"
import BG from "../img/football/footballwp.jpeg"
import { useNavigate } from 'react-router-dom'

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  paddingBottom: '20px',
  paddingTop: '20px',
};

export const futbolData = [
  {
    id:1,
    name:"Volkan Demirel",
    desc:"Volkan Demirel profesyonel futbolculuk kariyerine 2000 yılında Kartalspor'da başladı. 2002 yılında Fenerbahçe'ye transfer oldu.[1] Burada beş Süper Lig, iki Türkiye Kupası ve üç Süper Kupa şampiyonluğu yaşadı.[1] 2004'ten itibaren Türkiye millî takımının formasını giyen futbolcu, 2008 Avrupa Futbol Şampiyonası' nda mücadele etmiştir. 2 Eylül 2019 tarihinde futbolu bırakan Volkan Demirel, 2021 yılına kadar Fenerbahçe'de yardımcı antrenör olarak görev yaptı.[1] 2021 Aralık ayında Fatih Karagümrük takımında teknik direktörlük görevine başladı. 2022'de Fatih Karagümrük'den ayrıldı. 19 Eylül 2022 tarihinde Hatayspor'un teknik direktörü oldu.[1] 2 Mayıs 2024 tarihinde Hatayspor'dan istifa ettiğini açıkladı.[2]",
    img: Volkan
  },
  {
    id:2,
    name: "Alex de Souza",
    desc:"Alex, 14 Eylül 1977 tarihinde Brezilya'daki Paraná eyaletinin başkenti Curitiba'da dünyaya geldi.[5] Profesyonel futbol kariyerine 1995 yılında Brezilya Série A takımlarından Coritiba'da başladı.[6][7][8] 2 sene boyunca burada forma giyen Alex, kariyerini 1997 yılından itibaren aynı ligin takımlarından olan Palmeiras'ta devam ettirdi.[6][7][9][10] Brezilya millî takımındaki ilk maçını 23 Eylül 1998 yılında Yugoslavya'ya karşı oynadı.[11] 2000 ile 2001 yılları arasında önce Flamengo sonra Cruzeiro takımlarına gittikten sonra tekrar Palmeiras'a döndü.[6][10] 2001 yılının temmuz ayında Parma'ya 8 milyon € karşılığında transfer oldu.[12] 6 ay süren Parma kariyerinde herhangi bir resmî maçta forma giymedi ve 2002 Ocak ayında 4 milyon € karşılığında Cruzeiro'ya transfer oldu.",
    img: Alex
  },
  {
    id:3,
    name:"Roberto Carlos",
    desc:"2013-2014 senesi için Sivasspor ile 2 seneliğine anlaşmıştır. Fakat başarısız olduğu düşünülerek sözleşmesi feshedilmiştir. 2014-2015 sezonunu ikinci yarısı ve opsiyonlu olarak 2015-2016 sezonu dahil olmak üzere Roberto Carlos Akhisar Belediyespor ile 1,5 yıllık sözleşmeye imza attı. Fakat sezon sonu anlaşması karşılıklı olarak feshedilmiştir. 2015-2016 sezonu öncesi ise Hindistan kulübü Delhi Dynamos ile sözleşme imzaladı.[2]",
    img: Roberto
  },
  {
    id:4,
    name: "Diego Lugano",
    desc: "Futbola 1999 yılında Nacional takımında başladı. İki yıl bu takımda oynadıktan sonra 2001 yılında Plaza Colonia'ya geçti. 2 yıl Plaza Colonia'da oynayan futbolcu buradaki performansıyla Brezilya'nın önemli kulüplerinden biri olan São Paulo'ya transfer oldu ve buradaki formuyla Uruguay millî futbol takımında da oynamaya başladı. Uruguay millî futbol takımının kaptanlığını yapmaktadır. São Paulo'daki hırslı oyunu ile Van Damme lakabını takıldı. 2006 yılında ise Fenerbahçe'ye transfer oldu.",
    img: Lugano
  },
  {
    id:5,
    name: "Aziz Yıldırım",
    desc:"Aziz Yıldırım (2 Kasım 1952, Ergani, Diyarbakır), Türk iş insanı, inşaat mühendisi, armatör ve spor yöneticisi. 4. Kulüpler Birliği ve 32. Fenerbahçe Başkanı.[3] 1979 yılında kurulan Maktaş Mühendislik firmasının ve 1980 yılında kurulan DEARSAN Tersanesinin sahibidir. 1998-2018 yılları arasında başkanlık yaparak Fenerbahçe Spor Kulübü tarihindeki en uzun süreli başkanlık görevini üstlenen kişidir.[4] Ayrıca, kazandığı 92 adet kupa ile Fenerbahçe SK tarihinin en çok kupa kazanan başkanıdır.[5]",
    img: Aziz
  }
]

const Futbol = () => {
  const navigate = useNavigate();
  return (
    <div style={divStyle}>
      <h1 className='text-7xl text- text-[#cacaca]'>Fenerbahçe Efsaneleri</h1>
      {
        futbolData.map((dt,i)=> (
          <div onClick={() => navigate(`/futbol/${dt.id}`)} key={i} className='flex m-10 p-10 items-center justify-center gap-12 border border-black rounded-3xl bg-[#ececec] cursor-pointer bg-opacity-85 hover:bg-slate-200 transition'>
            <h1 className='text-3xl text-nowrap'>{dt.name}</h1>
            <img className='w-96 h-48 rounded-3xl' src={dt.img}></img>
            <p>{dt.desc}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Futbol