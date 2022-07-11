import NextNProgress from 'nextjs-progressbar';

import '@/assets/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#eb601e"
        startPosition={0.3}
        stopDelayMs={100}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
