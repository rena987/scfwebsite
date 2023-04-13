import myImage from 'public/union.jpg';
import { StaticImageData } from 'next/image';
import styles from '@/styles/Map.module.css'


export function Map() {
    const myImageString: string = (myImage as StaticImageData).toString();
    return (
        <>
          <img src={myImage.src} alt="My Image" className={styles.imageCenter}/>
        </>
      );
}