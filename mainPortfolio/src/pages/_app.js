import '@/styles/globals.css';
import React from 'react';
import Head from 'next/head';
import {Montserrat} from "next/font/google";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mont',
});


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="circle" class="circle"></div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kg.png" />
      </Head>
      <main className={`${montserrat.variable} font-mont dark:bg-dark`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

