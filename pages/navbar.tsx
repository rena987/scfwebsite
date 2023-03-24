import { NavLink, useLocation } from "react-router-dom";
import Image from 'next/image';



import styles from '@/styles/Home.module.css'

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
    return (
        <nav className={styles.navbarContainer}>
          <div>
            <Image  src="/startuplogo.png" alt="Logo" width={160} height={60} ></Image>
          </div>
          <div className={styles.navlinkContainer}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/map" className={`${styles.navLink} ${currentPath === "/map" ? styles.activeNavLink : ""}`}>Map</NavLink>
            <NavLink to="/directory" className={`${styles.navLink} ${currentPath === "/directory" ? styles.activeNavLink : ""}`}>Directory</NavLink>
            <NavLink to="/contactus" className={`${styles.navLink} ${currentPath === "/contactus" ? styles.activeNavLink : ""}`}>
              <button className={styles.myButton}>Contact Us</button>
            </NavLink>
            
          </div>
        </nav>
      );
}