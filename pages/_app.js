import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://sdk.minepi.com/pi-sdk.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
