import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const CourseDetail = () => {

    let params = useParams();
    console.log(params);

    const navigate = useNavigate() 
    const userActionBtn = () =>{
        navigate(-1);
    }
    

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button className="mb-9 hover:cursor-pointer inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300" onClick={userActionBtn}>Return to Home</button>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


          {/* Left Content */}
          <div className="lg:col-span-2">

            {/* Course Image */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Course"
              className="w-full h-80 object-cover rounded-2xl shadow-md mb-6"
            />

            {/* Course Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Full Stack Web Development - {params.courseId}
            </h1>

            <p className="text-gray-600 mb-6">
              Master frontend and backend technologies including HTML, CSS,
              JavaScript, React, Node.js, MongoDB and build real-world projects.
            </p>

            {/* What You’ll Learn */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">
                What You'll Learn
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                <li>✔ Build responsive websites</li>
                <li>✔ Master React & Hooks</li>
                <li>✔ Backend APIs with Node.js</li>
                <li>✔ Database integration</li>
                <li>✔ Authentication systems</li>
                <li>✔ Deploy real projects</li>
              </ul>
            </div>

            {/* Curriculum */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Course Curriculum
              </h2>

              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium">Module 1: HTML & CSS Basics</h3>
                  <p className="text-sm text-gray-500">
                    Structure, styling and responsive layouts.
                  </p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium">Module 2: JavaScript Fundamentals</h3>
                  <p className="text-sm text-gray-500">
                    ES6, DOM manipulation and project building.
                  </p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium">Module 3: React JS</h3>
                  <p className="text-sm text-gray-500">
                    Components, state, routing and hooks.
                  </p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium">Module 4: Backend Development</h3>
                  <p className="text-sm text-gray-500">
                    Node.js, Express & MongoDB integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Instructor
              </h2>

              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="Instructor"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">
                    Suraj Rathaur
                  </h3>
                  <p className="text-sm text-gray-500">
                    Full Stack Developer & Mentor with 5+ years experience.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              ₹4,999
            </h3>

            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
              <li>⏳ Duration: 6 Months</li>
              <li>📘 Level: Beginner to Advanced</li>
              <li>🎓 Certificate Included</li>
              <li>📱 Lifetime Access</li>
            </ul>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition mb-3">
              Enroll Now
            </button>

            <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-xl hover:bg-indigo-50 transition">
              Add to Wishlist
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseDetail;
