import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { render } from 'react-dom';
import {useEffect, useState} from 'react';
import styles from '@/styles/Home.module.css'

function App({Component, pageProps}: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}
export default App;