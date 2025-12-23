import React from 'react'
import Navbar from './components/header/navbar'
import Card from './components/Cards/card'

const App = () => {
  const students = [
  {
    id: 1,
    name: "Aman Sharma",
    age: 21,
    course: "Computer Science",
    city: "Chandigarh"
  },
  {
    id: 2,
    name: "Rohit Verma",
    age: 22,
    course: "Information Technology",
    city: "Shimla"
  },
  {
    id: 3,
    name: "Neha Thakur",
    age: 20,
    course: "Electronics",
    city: "Manali"
  }
];
  return (
    <div className='parent'>
      < Navbar />

      <div className="card-wrapper flex justify-between gap-x-2">
        {students.map(function(){
          return < Card />
        })}
      </div>
    </div>
  )
}

export default App
