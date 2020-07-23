import Head from 'next/head'
import { useState } from 'react'
import styles from './entrar.module.css'
import Link from 'next/link'

function Entrar() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    var dadosIncorretos = false;

    window.alert(`Login: ${login}\nSenha: ${senha}`)
    if(login != 'rairon' || senha != '123456'){
      dadosIncorretos = true;
    }

    if(dadosIncorretos){
      document.getElementById("labelLogin").innerHTML = "Usuário ou email - !"
      document.getElementById("labelLogin").style.color = "red"
      document.getElementById("inputLogin").style.borderColor = "red"
    }
    else {
      document.getElementById("labelLogin").innerHTML = "Usuário ou email"
      document.getElementById("labelLogin").style.color = "#563429"
      document.getElementById("inputLogin").style.borderColor = "#61ab5a"
    }
    
  }

  return <div className={styles.container}>
      <Head>
        <title>Entrar - Kiwi</title>
      </Head>

      <main>
        <div className={styles.title}>Bem vindo à <span>Kiwi</span>!</div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.user}>
              <label id="labelLogin">Usuário ou email</label>
              <input id="inputLogin" type="text" value={login} onChange={e => setLogin(e.target.value)}></input>
            </div>
            <div className={styles.password}>
              <label id="labelSenha">Senha</label>
              <input id="inputSenha" type="password" value={senha} onChange={e => setSenha(e.target.value)}></input>
            </div>
            <div className={styles.buttons}>
              <Link href="/cadastrar">
                <button type="button" name="cadastrar">Cadastrar</button>
              </Link>
              <button type="submit" name="entrar">Entrar</button>
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
          <img src="/kiwi.svg" alt="Kiwi Logo"/>
        </a>
      </footer>
    </div>
}

export default Entrar
