import React from 'react'
import "./Questioncard.css"

const Questioncard = ({questionsData, score, setScore, count, setCount, modal, setModal}) => {
  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
  }
  return (
    <div className='qcard'>
      <div>
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {
        questionsData[count]?.answers.map((answer,i) => (
          <button onClick={approvedChoice} >{answer}</button>
        ))
      }
    </div>
  )
}

export default Questioncard