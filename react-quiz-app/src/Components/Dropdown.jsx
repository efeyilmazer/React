import React from 'react'
import "./dropdown.css"
import Introduce from '../Pages/Introduce'

const Dropdown = ({setDifficultyChange,data}) => {
  return (
    <div className='dropdown'>
      <select onChange={e => setDifficultyChange(e.target.value)}>
        {
          data.map((dt,i) => (
            <option value={dt}>{dt}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown