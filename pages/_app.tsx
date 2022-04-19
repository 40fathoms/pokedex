import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Application do display pokemon data" />
        <link rel="icon" href="/pokeball.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
