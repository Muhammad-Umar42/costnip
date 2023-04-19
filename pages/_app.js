import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline');
  }, []);
  const baseUrl = process.env.NEXT_PUBLIC_API;

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(`${baseUrl}${resource}`, init).then((res) => res.json()),
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </>
  );
}
