import React from 'react'

const Banner = () => {
  return (
    <div>
        <section class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
  <div class="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <span class="inline-block mb-4 px-4 py-1 text-sm bg-white/20 rounded-full">
        Explore • Adventure • Discover
      </span>

      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Discover Your Next <br />
        <span class="text-yellow-300">Adventure Journey</span>
      </h1>

      <p class="text-lg text-white/90 mb-8 max-w-xl">
        Experience breathtaking treks, untouched nature, and unforgettable
        journeys with expert guides and well-planned itineraries.
      </p>

      <div class="flex flex-wrap gap-4">
        <a href="#"
          class="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
          Explore Treks
        </a>

        <a href="#"
          class="border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
          Contact Us
        </a>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 bg-white/10 rounded-3xl blur-2xl"></div>
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Hero Image"
        class="relative rounded-3xl shadow-2xl object-cover w-full h-[420px]"
      />
    </div>

  </div>
  <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
    <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
  </svg>
</section>

    </div>
  )
}

export default Banner
