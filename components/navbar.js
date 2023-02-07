import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
)

export default Navbar
