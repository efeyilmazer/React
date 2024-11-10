import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Introduce from "./Pages/Introduce"
import Quiz from "./Pages/Quiz"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Introduce/>} />
        <Route path="quiz/:difficulty/:amount" element={<Quiz/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
