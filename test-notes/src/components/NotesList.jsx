import React from 'react'
import { Trash } from 'lucide-react';

const NotesList = () => {
  return (
    <div className='notes-list-box'>
          <div className="md:col-span-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Your Notes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-100">

        {/* <!-- Note Card --> */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Meeting Notes
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Discuss project timeline and deliverables for next sprint.
            </p>
          </div>

          <button
            className="flex items-center gap-1 mt-4 text-sm text-red-600 hover:text-red-700 self-end"
          >
            <Trash /> <span>Delete</span>
          </button>
        </div>

        {/* <!-- Note Card --> */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Shopping List
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Milk, bread, eggs, fruits and vegetables.
            </p>
          </div>

          <button
            className="mt-4 flex items-center gap-1 text-sm text-red-600 hover:text-red-700 self-end"
          >
            <Trash /> <span>Delete</span>
          </button>
        </div>

        {/* <!-- Note Card --> */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Ideas
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Build a notes app with drag and drop feature.
            </p>
          </div>

          <button
            className="flex items-center gap-1 mt-4 text-sm text-red-600 hover:text-red-700 self-end"
          >
             <Trash /> <span>Delete</span>
          </button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default NotesList
