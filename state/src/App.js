import './App.css';
import { useState } from 'react';
import Resim from "./Components/Resim.js"

function randomResim() {
  const resimArray = ["Resim1","Resim2","Resim3","Resim4","Resim5"]
  return resimArray[Math.floor(Math.random() * resimArray.length)]
}

function App() {
  const [resimler, setResimler] = useState([])

  const resimEkle = () => {
    setResimler([...resimler , randomResim()])
  }


  return (
    <>
    <button onClick={resimEkle}>Ekle</button>
    {
      resimler.map((resim,idx) => {
        return <Resim key={idx} resimZort={resim}/>
      })
    }
    </>
  );
}

export default App;
