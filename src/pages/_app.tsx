import type { AppProps } from 'next/app'
import Head from 'next/head'
import SSRProvider from '@/app/common/components/SSRProvider'
import '@/styles/css/app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <title>Challenge</title>
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}

export default MyApp
