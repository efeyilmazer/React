import './App.css';
import Images from './Components/Images';
import imgone from "./img/1.webp"
import imgtwo from "./img/2.jpg"
import imgthree from "./img/3.webp"
import imgfour from "./img/4.jpg"
import imgfive from "./img/5.webp"

function App() {
  return (
    <>
    <Images img={imgone}/>
    <Images img={imgtwo}/>
    <Images img={imgthree}/>
    <Images img={imgfour}/>
    <Images img={imgfive}/>
    </>
  );
}

export default App;
