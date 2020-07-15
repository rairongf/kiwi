import Head from 'next/head'
import styles from './entrar.module.css'
import Link from 'next/link'

function Entrar() {
  return <div className={styles.container}>
      <Head>
        <title>Entrar - Kiwi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.title}>Bem vindo à <span>Kiwi</span>!</div>
        <div className={styles.form}>
          <form>
            <div className={styles.user}>
              <label>Usuário ou email</label>
              <input type="text"></input>
            </div>
            <div className={styles.password}>
              <label>Senha</label>
              <input type="password"></input>
            </div>
            <div className={styles.buttons}>
              <Link href="/cadastrar">
                <button type="button">Cadastrar</button>
              </Link>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/rairongf/kiwi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kiwi Github {' '}
          <img src="/kiwi.svg" alt="Kiwi Logo" className={styles.logo}/>
        </a>
      </footer>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main img {

        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #563429;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        footer img {
            margin-left: 0.5rem;
        }
        
        footer a {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        a {
            color: inherit;
            text-decoration: none;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
}

export default Entrar
