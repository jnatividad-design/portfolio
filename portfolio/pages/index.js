import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
      <Navbar />
        <title>Joshua Natividad</title>
        <meta name="name" content="Portfolio developed and designed by Joshua Natividad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello World</div>
    </div>
  );
}
