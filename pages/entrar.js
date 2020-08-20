import Head from 'next/head'
import { useState } from 'react'
import styles from './entrar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Entrar() {
  const router = useRouter()
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  async function validaLogin(email) {
   const response = await fetch(`/api/validateLogin`, {
      method: 'POST',
      headers: {
        //type of data
        'Content-Type': 'application/json'
      },
      //data to be posted on server
      body: JSON.stringify({
        email: email
      })
    });

    var loginRet;
    var senhaRet;

    /*const responseJson = new Promise((resolve, reject) => {
      return resolve(response.json());
    })*/

    /*response.json().then((j) => {
      loginRet = j.login;
      //console.log(loginRet);
    })*/

    console.log(response.json().then((j) =>{j.login}));

   /* console.log('inicio teste')
    console.log(responseJson)
//    console.log(senhaRet)
    console.log('fim teste') 
    */

    if (response.json().then(j.login) != login) {
      document.getElementById("inputLogin").style.borderColor = "red"
      window.alert(`O login @${login} não está cadastrado.\nPor favor, realize o cadastro ou digite novamente.`)
    } else {
      document.getElementById("inputLogin").style.borderColor = "#61ab5a"
      if (response.senha != senha) {
        document.getElementById("inputSenha").style.borderColor = "red"
        window.alert(`A senha digitada está incorreta.\nPor favor, digite novamente.`)
      } else {
        document.getElementById("inputSenha").style.borderColor = "#61ab5a"
        window.alert(`Login realizado com sucesso.\nSeja bem vindo!`)
        router.push('/dashboard')
      }
    }

  }


  function isLoginValido() {
    // função que irá verificar se o login digitado existe no banco
    if (login == 'rairon') {
      return true
    }
    else return false
  }

  function isSenhaValida() {
    // função que irá verificar se a senha digitada condiz com a senha
    // cadastrada no banco para o login

    if (senha == '123456' && login == 'rairon') {
      return true
    }
    else return false

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
    var loginValido
    var senhaValida
    var camposPreenchidos

    camposPreenchidos = isCamposPreenchidos()

    if (camposPreenchidos) {
      /*loginValido = isLoginValido()
      if (!loginValido) {
        document.getElementById("inputLogin").style.borderColor = "red"
        window.alert(`O login @${login} não está cadastrado.\nPor favor, realize o cadastro ou digite novamente.`)
      }
      else {
        document.getElementById("inputLogin").style.borderColor = "#61ab5a"
        senhaValida = isSenhaValida()

        if (!senhaValida) {
          document.getElementById("inputSenha").style.borderColor = "red"
          window.alert(`A senha digitada está incorreta.\nPor favor, digite novamente.`)
        }
        else {
          document.getElementById("inputSenha").style.borderColor = "#61ab5a"
          window.alert(`Login realizado com sucesso.\nSeja bem vindo!`)
          router.push('/dashboard')
        }

      }*/

      validaLogin(login)
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
            <input id="inputLogin" type="text" value={login} onChange={e => setLogin(e.target.value)}></input>
          </div>
          <div className={styles.password}>
            <label id="labelSenha">Senha</label>
            <input id="inputSenha" type="password" value={senha} onChange={e => setSenha(e.target.value)}></input>
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
