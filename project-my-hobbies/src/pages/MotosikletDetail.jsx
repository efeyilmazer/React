import React, { useEffect, useState } from 'react'
import { bikeData } from './Motosiklet'
import { useParams } from 'react-router-dom'
import BG from "../img/bikes/motogpwp.jpg"


const MotosikletDetail = () => {
    const divStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
      };

    const {id} = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        if(id) {
            setData(bikeData.find(dt => dt.id == id))
        }
    }, [id])
    
    
    console.log(data);
  return (
    <div className='flex items-center justify-center' style={divStyle}>
        <img className='rounded-3xl m-24 mb-72 w-[1000px]' src={data?.img}></img>
    </div>
  )
}

export default MotosikletDetail