import React from 'react'

const About = () => {
  return (
    <div>
       {/* Hero */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are passionate about building modern and scalable web solutions
            using React and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Who We Are
            </h2>
            <p className="text-gray-600">
              We help beginners and businesses create clean, fast and responsive
              websites. Our focus is simplicity, performance and real-world
              projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To make web development easy and accessible for everyone by
              teaching practical skills and best practices.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About
