import Head from 'next/head'
import { useState } from 'react'
import styles from './cadastro.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Cadastrar() {
    const router = useRouter()
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')
    const [rua, setRua] = useState('')
    const [num, setNum] = useState(-1)
    const [bairro, setBairro] = useState('')
    const [usuario, setUsuario] = useState({})

    function confereSenhas() {
        if (senha == senhaConfirmada) {
            return true
        }
        else {
            return false
        }
    }

    function isCamposPreenchidos() {
        var inputs = document.getElementsByTagName("input")
        var value
        var naoPreenchidos = []
        for (var i = 0; i < inputs.length; i++) {
            value = inputs[i].value
            if (!value) {
                naoPreenchidos.push(inputs[i])
                inputs[i].style.borderColor = "red"
            }
            else {
                inputs[i].style.borderColor = "#61ab5a"
            }
        }
        if (naoPreenchidos.length != 0) {
            return false
        }
        else {
            return true
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        var camposPreenchidos
        camposPreenchidos = isCamposPreenchidos()

        if (camposPreenchidos) {
            var estaValidado = confereSenhas()
            if (estaValidado) {
                /*setUsuario({
                    nome: `${nome}, ${sobrenome}`,
                    email: email,
                    senha: senhaConfirmada,
                    endereco: `${bairro},${rua},${num}`
                })*/

                const response = await fetch('/api/signUpUser', {
                    method: 'POST',
                    headers: {
                        //type of data
                        'Content-Type': 'application/json'
                    },
                    //data to be posted on server
                    body: JSON.stringify({
                        nome: `${nome} ${sobrenome}`,
                        email: email,
                        senha: senhaConfirmada,
                        //cidade: cidade,
                        bairro: bairro,
                        rua: rua,
                        numero: num
                    })
                });

                window.alert(`Cadastro realizado!`)

                router.push('/')
            }
            else {
                window.alert(`Senhas não conferem.\nPor favor, digite novamente.`)
                setSenha('')
                setSenhaConfirmada('')
            }
        }
        else {
            window.alert(`Parece que você esqueceu de preencher alguma coisa.`)
        }

    }

    return <div className={styles.container}>
        <Head>
            <title>Cadastro - Kiwi</title>
        </Head>

        <main>
            <div className={styles.title}>Cadastro</div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.user}>
                        <label>Nome e Sobrenome</label>
                        <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome..."></input>
                        <input type="text" name="sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} placeholder="Digite seu sobrenome..."></input>
                    </div>
                    <div className={styles.email}>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email..."></input>
                    </div>
                    <div className={styles.password}>
                        <label>Senha</label>
                        <input type="password" name="senha" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Escolha uma senha..."></input>
                        <input type="password" name="senhaConfirmada" value={senhaConfirmada} onChange={e => setSenhaConfirmada(e.target.value)} placeholder="Confirme sua senha..."></input>
                    </div>
                    <div className={styles.localizacao}>
                        <label>Endereço</label>
                        <input type="text" name="rua" value={rua} onChange={e => setRua(e.target.value)} placeholder="Digite a rua..."></input>
                        <div className={styles.bairroNumero}>
                            <input type="text" name="numero" value={(num == -1) ? '' : num} onChange={e => setNum(e.target.value)} placeholder="Digite o Nº..."></input>
                            <input type="text" name="bairro" value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Digite o bairro..."></input>
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

    </div>
}