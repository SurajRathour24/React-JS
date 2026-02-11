import React from 'react'

const Contact = () => {
  return (
    <div>
       {/* Header */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Have questions? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <form className="bg-gray-50 p-8 rounded-xl shadow-sm space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg resize-none"
            ></textarea>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              Send Message
            </button>

          </form>
        </div>
      </section>

    </div>
  )
}

export default Contact
