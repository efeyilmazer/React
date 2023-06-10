import Angular from "./Images/angular.jpg"
import Bootstrap from "./Images/bootstrap5.png"
import Sharp from "./Images/ccsharp.png"
import Kompleweb from "./Images/kompleWeb.jpg"

const courseMap = {
    Angular:Angular,
    Bootstrap:Bootstrap,
    Sharp:Sharp,
    Kompleweb:Kompleweb
}

function Course({courseName}) {
    console.log({courseName});
    return ( 
        <div>
            <img src={courseMap[courseName]}></img>
        </div>
     );
}

export default Course ;