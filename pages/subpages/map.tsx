import myImage from 'public/union.jpg';
import { StaticImageData } from 'next/image';

export function Map() {
    const myImageString: string = (myImage as StaticImageData).toString();
    return (
        <>
          <h1>Map</h1>
          <img src={myImage.src} alt="My Image" />
        </>
      );
}