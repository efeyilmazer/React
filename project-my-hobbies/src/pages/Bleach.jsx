import React from 'react'
import Espada0 from "../img/bleach/espada-0.webp"
import Espada1 from "../img/bleach/espada-1.webp"
import Espada2 from "../img/bleach/espada-2.webp"
import Espada3 from "../img/bleach/espada-3.webp"
import Espada4 from "../img/bleach/espada-5.webp"
import BG from "../img/bleach/bleachwp.jpg"
import { useNavigate } from 'react-router-dom'

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'auto',
  paddingBottom: '20px',
  paddingTop: '20px',
};

export const bleachData = [
  {
    id:1,
    name: "Yammy Llargo† the Cero (0)",
    desc: "By far the largest of the current Espada, Yammy is a giant Arrancar with tan skin, a powerful build, and a ridge-lined cranium. He has brown eyes, black hair, long, bushy sideburns, and a thin ponytail reaching his upper-back. Aside from this, he is bald. He has orange eyebrows, and red markings under his eyes. He wears the standard Espada uniform, with the only difference being his jacket is always open Like all Arrancar, he has a large hole signifying his previous time as a Hollow, his is located in the center of his chest. What remains of his Hollow mask is the jawbone (complete with 8 teeth), which rests on his chin. A tattoo of the number 10, signifying Yammy's rank, is on his left shoulder. In his released form, the 1 melts away, leaving just the 0.",
    img: Espada0
  },
  {
    id:2,
    name:"Coyote Starrk† the Primera (1st)",
    desc: "Starrk has blue-gray eyes and wavy, dark brown hair, which ends at the base of his neck, is always unkempt, and is parted down the middle. He has a faded goatee. His clothing is typical of an Arrancar: he wears a white jacket outlined in black, though altered with the collar upturned. A black sash is worn in a manner similar to a matador around his waist and he wears white gloves. The remains of his Hollow mask consist of a fanged bottom jaw which is positioned along his neck. His Hollow hole is on his sternum, right below the tip of his mask.[2] His Espada tattoo is featured on the back of his left hand, which is usually hidden underneath his gloves.[3]",
    img: Espada1
  },
  {
    id:3,
    name:"Baraggan Louisenbairn† the Segunda (2nd)",
    desc:"Baraggan has the appearance of an elderly man, with a left olive green eye, a white mustache and white hair. His face is lined by large scars on the left side of his chin that goes down to his neck and across his right eye. Despite his aged appearance, Baraggan is quite stocky and muscular, and when standing (albeit with the slouch of an elderly person), he is of a fair size. He wears a regal white leather coat with black fur lining, short sleeves, and three black fur stripes running along the bottom. He wears a golden wristband on both wrists, and a belt consisting of three thick chains attached to a large metal disk with a sun emblem. Overall, he resembles a barbarian lord (of Viking origin). The remnants of his Hollow mask take the form of a five-pointed crown just above his forehead.[3][4] The location of his Espada tattoo is unknown. His Hollow hole is in the center of his chest.[5]",
    img: Espada2
  },
  {
    id:4,
    name:"Nelliel Tu Odelschwanck the Tres (3rd)",
    desc:"Nelliel is a female Arrancar who has hazel eyes and green hair.[2][3] Her true form is that of a tall, fully-grown curvaceous and well-endowed adult with long waving green hair. Notably, she has a scar and the crimson line that runs across her face, and pronounced lower canine teeth. Her gown is now torn into a skirt and a top, connected with a single strip across her abdomen. Her skull mask also differs slightly; its features appearing sharper and less cartoonish with a pair of curved horns, but still missing some of its teeth.[4] A large 3 is tattooed on her back, indicating that she was the former 3rd Espada.[5]",
    img: Espada3
  },
  {
    id:5,
    name:"Ulquiorra Cifer† the Cuatro (4th)",
    desc:"Ulquiorra is a slender, yet fairly muscular, male Arrancar of average height with a melancholic appearance. He has fairly short, messy black hair, pale white skin, a black upper lip, and green eyes with small slit-shaped pupils, similar to a cat's. Part of his bangs fall between his eyes, and he has distinctively thick eyebrows. He has teal lines which descend from the lower part of his eyes. His facial expression rarely changes, though he is almost always frowning. He wears typical Arrancar clothes: a white jacket, black sash, and a white hakama. However, his jacket has longer coattails than others, and the collar is higher.[3]",
    img: Espada4
  }
]

const Bleach = () => {
  const navigate = useNavigate();
  return (
    <div style={divStyle}>
      <h1 className='text-7xl text- text-[#cacaca]'>Espada List</h1>
      {
        bleachData.map((dt,i) => (
          <div onClick={()=> navigate(`/bleach/${dt.id}`)} key={i} className='cursor-pointer bg-[#ececec] bg-opacity-85 flex items-center gap-x-20 p-12 m-12 rounded-3xl border border-black hover:bg-slate-200 transition'>
            <h1 className=' text-2xl w-auto'>{dt.name}</h1>
            <img src={dt.img} className='w-96 h-96'></img>
            <p className='w-3/4'>{dt.desc}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Bleach