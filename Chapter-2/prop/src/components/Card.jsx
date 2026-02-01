import React from "react";

const Card = (props) => {    
  return (
    <div>
      <div classNameName="card-wrapper">
        <div class="max-w-sm rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-5 text-white">
          <div class="flex items-center gap-4">
            <img
              src={props.img}
              alt="Profile"
              class="w-16 h-16 rounded-lg object-cover"
            />

            <div>
              <h3 class="text-lg font-semibold">{props.name}</h3>
              <p class="text-sm text-gray-300">{props.designation}</p>
              <span class="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">
                Active
              </span>
            </div>
          </div>

          <div class="my-4 h-px bg-white/20"></div>

          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-400">Employee ID </span>
              <span> EMP- {props.empID}</span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-400">Company</span>
              <span>{props.company}</span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-400">Blood Group</span>
              <span class="text-red-400 font-medium">O+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
