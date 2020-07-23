import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from './cadastrar.module.css'
import Link from 'next/link'

export default function Cadastrar(){
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')
    const [rua, setRua] = useState('')
    const [num, setNum] = useState(-1)
    const [bairro, setBairro] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        window.alert(`Nome: ${nome}\nSobrenome: ${sobrenome}`)
    }

    return <div className={styles.container}>
        <Head>
            <title>Cadastrar - Kiwi</title>
        </Head>

        <main>
            <div className={styles.title}>Cadastrar</div>
            <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.user}>
                    <label>Nome e Sobrenome</label>
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome..."></input>
                    <input type="text" value={sobrenome} onChange={e => setSobrenome(e.target.value)} placeholder="Digite seu sobrenome..."></input>
                </div>
                <div className={styles.email}>
                    <label>Email</label>
                    <input type="text" placeholder="Digite seu email..."></input>
                </div>
                <div className={styles.password}>
                    <label>Senha</label>
                    <input type="password" placeholder="Escolha uma senha..."></input>
                    <input type="password" placeholder="Confirme sua senha..."></input>
                </div>
                <div className={styles.localizacao}>
                    <label>Endereço</label>
                    <input type="text" placeholder="Digite a rua..."></input>
                    <div className={styles.bairroNumero}>
                        <input type="text" name="numero" placeholder="Digite o Nº..."></input>
                        <input type="text" name="bairro" placeholder="Digite o bairro..."></input>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link href="/">
                        <button type="button" name="voltar">Voltar</button>
                    </Link>
                    <button type="submit" name="confirmar">Confirmar</button>
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