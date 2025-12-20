import React from 'react'

const card = () => {
  return (
   <div class="min-h-screen bg-gray-900 flex items-center justify-center p-6">
  
  <div class="max-w-sm w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg">
    
    <div class="flex items-center gap-4">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        class="w-16 h-16 rounded-full object-cover"
        alt="User"
      />

      <div>
        <h3 class="text-lg font-semibold text-white">Rahul Sharma</h3>
        <p class="text-sm text-gray-400">rahul@gmail.com</p>
      </div>
    </div>

    <div class="mt-4 space-y-2 text-sm text-gray-300">
      <div class="flex justify-between">
        <span class="text-gray-400">Gender</span>
        <span>Male</span>
      </div>

      <div class="flex justify-between">
        <span class="text-gray-400">User ID</span>
        <span>#USR1024</span>
      </div>

      <div class="flex justify-between">
        <span class="text-gray-400">DOJ</span>
        <span>12 Aug 2024</span>
      </div>
    </div>

  </div>

</div>

  )
}

export default card
