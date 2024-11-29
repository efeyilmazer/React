import './App.css'
import Main from "./pages/Main"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Prof from './pages/Prof';
import Freelance from './pages/Freelance';
import Projelerim from "./pages/Projelerim"
import Iletisim from "./pages/Iletisim"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Prof/>} path="/Tecrubelerim"/>
        <Route element={<Freelance/>} path="/Freelance"/>
        <Route element={<Projelerim/>} path="/Projelerim"/>
        <Route element={<Iletisim/>} path="Iletisim"/>
      </Routes>
    </Router>
    </>
  )
}

export default App
