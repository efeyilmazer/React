import React, { useEffect, useState } from 'react'
import { bleachData } from './Bleach'
import { useParams } from 'react-router-dom'
import BG from "../img/bleach/bleachwp.jpg"

const divStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    paddingBottom: '20px',
    paddingTop: '20px',
  };

const BleachDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(bleachData.find(dt => dt.id == id))
    }, [])
    

    console.log(id);
    console.log(data);


  return (

<div style={divStyle} className='flex items-center justify-center'>
    <img className='rounded-3xl mt-24 mb-64 w-[500px]' src={data?.img}></img>
</div>

  )
}

export default BleachDetail