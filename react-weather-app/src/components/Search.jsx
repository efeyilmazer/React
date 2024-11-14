import axios from 'axios'
import React, { useState } from 'react'

const Search = ({setApiData , setState}) => {
  const [city, setCity] = useState("")

  const apiCall = async() => {
    const api = "0d9c74889172247f919618d4d7cda109"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
    await axios.get(url).then(res => setApiData(res.data))
    setState(true)
  }

  console.log(city);
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault()}} className='flex items-center justify-center gap-4'>
        <input onChange={(e) => {setCity(e.target.value);}} className="pl-4 w-[370px] h-12 rounded-xl text-2xl" type="text" placeholder='Aramak istediğiniz şehri giriniz...'></input>
        <button onClick={apiCall} className='w-24 h-12 bg-white rounded-xl ' type="submit">Ara</button>
      </form>
    </div>
  )
}

export default Search