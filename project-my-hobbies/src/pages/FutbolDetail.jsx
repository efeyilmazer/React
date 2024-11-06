import React, { useEffect, useState } from 'react'
import { futbolData } from './Futbol'
import { useParams } from 'react-router-dom'
import BG from "../img/football/footballwp.jpeg"

const FutbolDetail = () => {
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
            setData(futbolData.find(dt => dt.id == id))
        }
    }, [id])

    console.log(data);
    
  return (
    <div style={divStyle} className='flex items-center justify-center'>
        <img className='rounded-3xl m-24 mb-64 w-[1000px]' src={data?.img} alt="" />
    </div>
  )
}

export default FutbolDetail