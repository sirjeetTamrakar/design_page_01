import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from 'react';

function MyApp({ Component, pageProps })
{
  useEffect(() => {
		AOS.init({delay: 450, offset: 60, duration: 1000});
	}, []);
  return <Component {...pageProps} />
}

export default MyApp
