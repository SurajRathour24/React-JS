import React, { createContext } from 'react'

export let ThemeData = createContext()

const ThemeContext = (props) => {
  return (
    <div>
      {/* <h1>Theme Context</h1> */}
      <ThemeData.Provider value='Dark'>
          {props.children}
      </ThemeData.Provider>
    </div>
  )
}

export default ThemeContext
