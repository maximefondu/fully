import type { AppProps } from 'next/app'

import './../styles/main.css'

import Header from '@components/Header'
import Footer from '@components/Footer'

function Fully({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default Fully
