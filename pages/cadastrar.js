import Head from 'next/head'

export default function Cadastrar(){
    return <>
        <Head>
            <title>Cadastrar - Kiwi</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            Cadastrar
        </main>

        <footer>
            <a
            href="https://github.com/rairongf/kiwi"
            target="_blank"
            rel="noopener noreferrer"
            >
            Kiwi Github {' '}
            <img src="/kiwi.svg" alt="Kiwi Logo"/>
            </a>
      </footer>
    </>
}