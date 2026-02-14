import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects.",
      price: "₹4,999",
      duration: "6 Months",
      level: "Beginner to Advanced",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "React JS Mastery",
      description:
        "Master React, Hooks, Routing, State Management and modern UI design.",
      price: "₹2,999",
      duration: "3 Months",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      id: 3,
      title: "UI/UX Design Pro",
      description:
        "Learn Figma, Design Systems, Wireframing and modern user interface principles.",
      price: "₹3,499",
      duration: "4 Months",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "SEO, Social Media Marketing, Ads, Content Strategy & Growth Hacking.",
      price: "₹2,499",
      duration: "2 Months",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Popular Courses
          </h2>
          <p className="text-gray-600 mt-3">
            Upgrade your skills with industry-ready courses.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>⏳ {course.duration}</span>
                  <span>📘 {course.level}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">
                    {course.price}
                  </span>

                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    <Link to='/courses/web-dev'>Enroll Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Course;
