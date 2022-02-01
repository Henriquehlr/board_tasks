import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { Provider as NextAuthProvider } from 'next-auth/client'

const initialOptions = {
  "client-id": "AeMrqcgL8Ar5WL4M-GfqtFjMSynKZ2gdcIvkzTLcWDy-wfQiL_GMyrrdJvDP31WOX5vSvYaBChspyJwZ",
  currency: "BRL",
  intent: "capture"
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider >
    </NextAuthProvider>

  )
}

export default MyApp
