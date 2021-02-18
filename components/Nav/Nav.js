import React from 'react';
import Link from "next/link";
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header} >
      <div>LOGO</div>
      <nav>
         <Link href='/'>
           <a className={styles.link}>Home</a>
         </Link>
        <Link href='/users'>
           <a className={styles.link}>Users</a>
         </Link>
        <Link href='/about'>
           <a className={styles.link}>About Us</a>
         </Link>
      </nav>
    </header>
  )
    ;
};

export default Nav;