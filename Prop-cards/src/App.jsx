import 'bulma/css/bulma.css'
import './App.css'
import Course from './Components/Course'
import Angular from './Images/angular.jpg'
import Bootstrap5 from './Images/bootstrap5.png'
import Sharp from './Images/ccsharp.png'
import Komple from './Images/kompleweb.jpg'

function App() {

  return (

    <div className="App">
      <section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      Kurslarım
    </p>
  </div>
</section>
<section className='section'>
<div className="container">
            <div className="columns">
                <div className="column">
                <Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat rerum, deleniti expedita tempore itaque fuga sunt? Quasi optio id non libero! Alias fugiat ab reiciendis facere non soluta nihil."/>
                </div>
                <div className="column">
                <Course image={Bootstrap5} title="Bootstrap-5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat rerum, deleniti expedita tempore itaque fuga sunt? Quasi optio id non libero! Alias fugiat ab reiciendis facere non soluta nihil."/>
                </div>
                <div className="column">
                <Course image={Sharp} title="Full-Stack" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat rerum, deleniti expedita tempore itaque fuga sunt? Quasi optio id non libero! Alias fugiat ab reiciendis facere non soluta nihil."/>
                </div>
                <div className="column">
                <Course image={Komple} title="Front-end" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat rerum, deleniti expedita tempore itaque fuga sunt? Quasi optio id non libero! Alias fugiat ab reiciendis facere non soluta nihil."/>
                </div>
            </div>
        </div>
</section>
    </div>
  )
}

export default App
