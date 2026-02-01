import React from 'react'
import Card from './components/Card'

const App = () => {
  
let employees = [
  {
    empID: 101,
    name: "Rohit Sharma",
    designation: "UI Developer",
    company: "Telisky",
    age: 28,
    img: "https://picsum.photos/seed/rohit/200/300",
    blood: "B+"
  },
  {
    empID: 102,
    name: "Neha Verma",
    designation: "React Developer",
    company: "Telisky",
    age: 25,
    img: "https://picsum.photos/seed/neha/200/300",
    blood: "O+"
  },
  {
    empID: 103,
    name: "Aman Gupta",
    designation: "Backend Developer",
    company: "Telisky",
    age: 32,
    img: "https://picsum.photos/seed/aman/200/300",
    blood: "AB+"
  }
];

  
  
  return (
    <div className='flex gap-5'>
      {employees.map(function(emp){
        return < Card empID={emp.empID} name={emp.name} age={emp.age} img={emp.img} designation={emp.designation} company={emp.company} />;
      })}
    </div>
  )
}

export default App
