import React from "react";

const NotesForm = () => {

  let formSubmission = (e) =>{
    e.preventDefault();
    console.log("Controlling Form");
    
  }
  return (
    <div className="form-wrapper-box">
      {/* <!-- Left: Notes Form --> */}
      <div className="md:col-span-1 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Add New Note
        </h2>

        <form className="space-y-4" onSubmit={formSubmission}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Note Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Write your note..."
              className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotesForm;
