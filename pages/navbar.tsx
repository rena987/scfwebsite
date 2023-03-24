import { NavLink } from "react-router-dom";
import Image from 'next/image';


import styles from '@/styles/Home.module.css'

export function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
          <div>
            <Image  src="/startuplogo.png" alt="Logo" width={160} height={60} ></Image>
          </div>
          <div className={styles.navlinkContainer}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/map" className={styles.navLink}>Map</NavLink>
            <NavLink to="/directory"className={styles.navLink}>Directory</NavLink>
            <NavLink to="/contactus">
              <button className={styles.myButton}>Contact Us</button>
            </NavLink>
            
          </div>
        </nav>
      );
}