import type { AppProps } from 'next/app'
import React from 'react'
import "../styles/globals.css";
import Head from "next/head";
import localFont from 'next/font/local';
import '../styles/globals.css';

const geistSans = localFont({
    src: "/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Buddy</title>
          <meta name="description" content="Backoffice web de Buddy" />
          <link rel="icon" href="/buddy_logo.svg" />
        </Head>

          <div className={`${geistSans.variable} ${geistMono.variable}`}>
              <Component {...pageProps} />
          </div>
      </>
  );
}