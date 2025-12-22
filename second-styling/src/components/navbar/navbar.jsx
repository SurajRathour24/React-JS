import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>Navbar</div>
      <button className={styles.btn}>Call Now</button>
    </div>
  )
}

export default Navbar
