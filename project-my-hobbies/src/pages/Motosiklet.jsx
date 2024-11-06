import React from 'react'
import BG from "../img/bikes/motogpwp.jpg"
import R1 from "../img/bikes/r1.jpg"
import R7 from "../img/bikes/r7.jpg"
import R6 from "../img/bikes/r6.jpg"
import CBR from "../img/bikes/1000rrr.webp"
import RSV4 from "../img/bikes/rsv4.webp"
import { useNavigate } from 'react-router-dom'

export const bikeData = [
  {
    id:1,
    name: "Yamaha R1",
    desc: "R'nin geçmişi. Sizin geleceğiniz. R1'de kullanılan tüm ileri teknolojiler, Yamaha'nın en üst düzeyde koşulan yarışlara katılımından elde edilen bilgiler kullanılarak geliştirilmiştir. Olağanüstü 998 cc 4 silindirli EU5 crossplane (çapraz düzlem) teknolojisine sahip motorun M1 ünitesiyle doğrudan bir kan bağı bulunuyor; aerodinamik gövde ise doğrudan yarış pistlerinde kazanılan deneyimlerle geliştirildi. Ancak hepsinin ötesinde, bu motosikletin bu kadar özel olmasını sağlayan unsur R1'in inanılmaz akıllı elektronik donanımıdır. Kablolu sürüş gaz kelebeği, Kalkış Kontrol Sistemi (LCS), Motor Freni Yönetimi (EBM), Fren Kontrolü (BC) ve çok daha fazlasıyla donatılmış bu motosiklet, yolda ve pistte liderlik etmek için tasarlanmış en üst düzey Yamaha Supersport'tur. Yeni nesil Icon Blue ve Yamaha Black renk düzeni ve grafiklerinde sunulmaktadır.",
    img: R1
  },
  {
    id:2,
    name: "Yamaha R7",
    desc: "Hızlı, çevik ve şık R7, spor performansı günlük eğlenceyle buluşturuyor. Yeni nesil Icon Blue renk ve grafiklerine sahip ultra ince aerodinamik gövdeye sahip R7, efsanevi R Serisi ailesinin en yeni üyelerinden. R7, yüksek torklu 689 cc motoru ve kompakt şasisi ile Supersport sürüş deneyimine yeni bir boyut kazandırıyor.",
    img : R7
  },
  {
    id:3,
    name: "Yamaha R6",
    desc: "Aerodinamik gövdesi ve Yamaha’nın safkan R-Serisi DNA’sının tüm özelliklerine sahip agresif görünüşlü R6, 600 supersport’ta ulaşılan son noktadır. Alçak yakıt deposu ve gidon konumu üstün sürüş konforu ve hassas kontrol sağlamak amacıyla mükemmel sürücü ergonomisi sağlarken gelişmiş özelliklere sahip yeni 43 mm baş aşağı ön amortisörler, gelişmiş süspansiyon hissi ve tepki verir. Çağrıya cevap verin ve R-World dünyasına girin.",
    img: R6
  },
  {
    id:4,
    name: "CBR 1000RR-R",
    desc: "2017 modeli, güç ünitesinin çıkışını ve kullanım kolaylığını artırırken kapsamlı ağırlık azaltma ve kütle merkezileştirme yoluyla çevik kullanımın peşinden giderek, her nesil modelde ortak olan Toplam kontrol - sürüş keyfini en üst düzeye çıkarma geliştirme temasını geliştiriyor. Sürücü, motosikletin duruşunu tahmin etmek ve çeşitli cihazları kontrol etmek için Honda'nın benzersiz algoritmalarını kullanan elektronik kontrol teknolojisiyle destekleniyor. CBR1000RR SP, yol koşullarına göre sönümleme özelliklerini optimize eden bir Öhlins Smart EC sistemi ve Brembo ön kaliperlerle donatılmıştır. Ağırlığı azaltmak ve kütleyi merkezileştirmek için SP, bir lityum iyon pil ve dünya çapında üretim modeli ilk titanyum yakıt deposuyla donatılmıştır.",
    img: CBR
  },
  {
    id:5,
    name: "Aprilia RSV4",
    desc: "Aprilia’nın yarış pistlerinde elde ettiği tecrübenin caddelere yansıması olan RSV4 sadece bir motosiklet olmanın oldukça ötesinde. Gazı her açtığınızda tüylerinizi diken diken edecek dört silindirli motoru, rüzgarı adete bir kurşun gibi yarıp geçmenizi sağlayacak aerodinamik tasarımı ve bakışların her zaman üstünüzde olmasına neden olacak estetiğiyle RSV4 bambaşka bir dünyanın kapılarını aralıyor. RSV4, mühendisliğin ve tasarımın sınırlarını zorluyor. Kendi sınırlarınızı zorlamak ise, size kalmış!",
    img: RSV4
  }
]

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'auto',
  paddingBottom: '20px',
  paddingTop: '20px',
};

const Motosiklet = () => {
  const navigate = useNavigate();
  return (
    <div style={divStyle}>
      <h1 className='text-7xl text- text-[#cacaca]'>Efsane Motorlar</h1>
      {
        bikeData.map((dt,i) => (
          <div onClick={()=> navigate(`/motosiklet/${dt.id}`)} className='flex m-10 p-10 items-center justify-center gap-12 border border-black rounded-3xl bg-[#ececec] cursor-pointer bg-opacity-85 hover:bg-slate-200 transition'>
            <h1 className='text-3xl text-nowrap'>{dt.name}</h1>
            <img className='h-96 rounded-3xl' src={dt.img}></img>
            <p>{dt.desc}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Motosiklet