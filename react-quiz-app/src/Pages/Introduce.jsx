import React, { useState } from 'react'
import "./introduce.css"
import Dropdown from "../Components/Dropdown"
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"]
  const [difficultyChange, setDifficultyChange] = useState("")
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10

  const startQuiz = () => {
    if(difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }

  console.log(difficultyChange);
  return (
    <div className='introduce'>
      <div className="introduce-container">
      <img src="https://www.everythingdjs.com/wp-content/uploads/2020/09/Virtual-Trivia-Logo-Horizontal.png"></img>
      <Dropdown data ={difficulty} setDifficultyChange={setDifficultyChange}/>
      <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>
      </div>
    </div>
  )
}

export default Introduce