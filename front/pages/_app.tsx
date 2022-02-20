import type { AppProps } from 'next/app'

import './../styles/main.css'

import Header from '@components/Header'

function Fully({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default Fully
