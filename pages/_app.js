import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.minepi.com/pi-sdk.js';
    script.async = true;
    script.onload = () => {
      if (window.Pi) {
        window.Pi.init({ version: '2.0', sandbox: false });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <Component {...pageProps} />;
}
