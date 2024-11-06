import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Bleach from './pages/Bleach.jsx';
import Motosiklet from './pages/Motosiklet.jsx';
import Futbol from './pages/Futbol.jsx';
import Home from './pages/home.jsx';
import "./img/bleach/espada-0.webp"
import BleachDetail from './pages/BleachDetail.jsx';
import FutbolDetail from './pages/FutbolDetail.jsx';
import MotosikletDetail from './pages/MotosikletDetail.jsx';


function App() {

  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bleach" element={<Bleach/>}/>
        <Route path="/bleach/:id" element={<BleachDetail/>}/>
        <Route path="/motosiklet" element={<Motosiklet/>}/>
        <Route path="/motosiklet/:id" element={<MotosikletDetail/>}/>
        <Route path="/futbol" element={<Futbol/>}/>
        <Route path="/futbol/:id" element={<FutbolDetail/>}/>
      </Routes>
    </Router>

    

    </>
  )
}

export default App
