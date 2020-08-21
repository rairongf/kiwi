import Head from 'next/head'
import { useState } from 'react'
import styles from './entrar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Entrar() {
  const router = useRouter()
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  async function validaLogin() {
    const response = await fetch(`http://localhost:3000/api/users/${login}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({senha})
    });

    response.json().then( json => {
      if(response.ok){
        alert(json.success)
        router.push('/dashboard')
      }
      else {
        alert(json.error)
      }
    })
  }

  function isCamposPreenchidos() {
    if (login == '' || senha == '') {
      return false
    }
    else {
      return true
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    var camposPreenchidos

    camposPreenchidos = isCamposPreenchidos()

    if (camposPreenchidos) {
      validaLogin()
    }
    else {
      window.alert(`Parece que você esqueceu de preencher alguma coisa.`)
    }
  }

  return <div className={styles.container}>
    <Head>
      <title>Bem vindo - Kiwi</title>
    </Head>

    <main>
      <div className={styles.title}>Bem vindo à <span>Kiwi</span>!</div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.user}>
            <label id="labelLogin">Usuário ou email</label>
            <input id="inputLogin" type="text" value={login} 
                  onChange={e => setLogin(e.target.value)}
            ></input>
          </div>
          <div className={styles.password}>
            <label id="labelSenha">Senha</label>
            <input id="inputSenha" type="password" value={senha} 
                  onChange={e => setSenha(e.target.value)}
            ></input>
          </div>
          <div className={styles.buttons}>
            <Link href="/cadastro">
              <button type="button" name="cadastrar">Cadastrar</button>
            </Link>
            <button type="submit" name="entrar">Entrar</button>
          </div>
        </form>
      </div>
    </main>

  </div>
}

export default Entrar
