import Resim1 from "../img/1.webp"
import Resim2 from "../img/2.jpg"
import Resim3 from "../img/3.webp"
import Resim4 from "../img/4.jpg"
import Resim5 from "../img/5.webp"

const resimMap = {
    Resim1 : Resim1,
    Resim2 : Resim2,
    Resim3 : Resim3,
    Resim4 : Resim4,
    Resim5 : Resim5
}

function Resim({resimZort}) {
    return ( 
        <div>
            <img src={resimMap[resimZort]}></img>
        </div>
     );
}

export default Resim;