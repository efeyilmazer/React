import './App.css'
import Main from "./pages/Main"
import Detail from "./pages/Detail"
import { useState } from 'react'


function App() {
  const [apiData, setApiData] = useState([])
  const [state, setState] = useState(false)

  return (
    <div className='flex w-auto h-screen flex-col items-center justify-center'>
          <Main apiData={apiData} setApiData={setApiData} state= {state} setState={setState}/>
    </div>
  )
}

export default App
