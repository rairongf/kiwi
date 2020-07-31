import Head from 'next/head'
import Entrar from './entrar'

export default function Index() {
  return <>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#61ab5a" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Entrar />
  </>


}