import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import { Poppins } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

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
        <div className={poppins.className}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </SWRConfig>
    </>
  );
}