import { useState } from 'react'
import './App.css'
import Course from './Course'

function getRandomCourses() {
  const courseArray = ["Angular", "Bootstrap", "Kompleweb", "Sharp"]
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourses()])
  }

  const courseList = courses.map((course, idx) => {
    return <Course key={idx} courseName={course} />
  })

  return (

    <>

    <button onClick={handleClick}>Kurs Ekle</button>
    <div>{courseList}</div>

    </>

  )
}

export default App
