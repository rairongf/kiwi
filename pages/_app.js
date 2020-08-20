import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Quicksand:wght@700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}