import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img src={props.img}
             alt="Team Member"
             class="w-full h-64 object-cover" />
        <div class="p-5 text-center">
          <h3 class="text-lg font-semibold text-gray-900">{props.user}</h3>
          <p class="text-sm text-indigo-600">{props.designation}</p>
           <div class="text-sm text-gray-600 flex flex-col gap-1">
        <span>📍 {props.location}</span>
        <span>🕒 {props.exp}+ Years Experience</span>
      </div>
        </div>
       
      </div>
  )
}

export default Card
