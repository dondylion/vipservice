import React, {useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/avia');
  }, [])

  return (
    <div>
      <Head>
        <title>Vip Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
    </div>
  )
}
