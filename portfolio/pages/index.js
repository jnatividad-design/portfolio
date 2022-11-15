import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Natividad</title>
        <meta name="name" content="Portfolio developed and designed by Joshua Natividad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold mt-200">
          Hello I'm{' '}
          <a className="text-blue-500" href="https://nextjs.org">
            Joshua Natividad!
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Junior UX Designer who likes to {' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            code
          </code>
        </p>
      </main>
    </div>
  );
}
