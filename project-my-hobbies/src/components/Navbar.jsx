import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className='pointer flex justify-around items-center w-full h-24 bg-[#142d4c] text-2xl'>
        <button onClick={()=> navigate("/")} className='transition hover:bg-blue-800 border border-black h-16 w-96 bg-blue-900 rounded-lg'>Ana Sayfa</button>
        <button onClick={()=> navigate("bleach")} className='transition hover:bg-blue-800 border border-black h-16 w-96 bg-blue-900 rounded-lg'>Bleach</button>
        <button onClick={()=> navigate("motosiklet")} className='transition hover:bg-blue-800 border border-black h-16 w-96 bg-blue-900 rounded-lg'>Motorsiklet</button>
        <button onClick={()=> navigate("futbol")} className='transition hover:bg-blue-800 border border-black h-16 w-96 bg-blue-900 rounded-lg'>Fenerbahçe</button>
        </div>
    </>
  )
}

export default Navbar