import React from 'react'
import Search from '../components/Search'

const Main = ({apiData , setApiData , setState, state}) => {
  return (
    <div>
      <Search setApiData={setApiData} setState={setState}/>
      {
        state == true ?
        <div className='flex flex-col gap-2 mt-12 text-3xl'>
          <h1>Hava durumu: {apiData.main?.temp}</h1>
          <h4>Hissedilen: {apiData.main?.feels_like}</h4>
        </div> : null
      }
    </div>
  )
}

export default Main