import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import styles from './header.module.css'

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function PageHeader(){
  const [busca, setBusca] = useState('')

  return(
    <div className={styles.header_container}>
      <header className={styles.header_content}>
        <div className={styles.buttons_container}>
          <div className={styles.left_buttons_container}>
            <Link href="/entrar">
              <button> <ArrowBackIcon fontSize="large"/> </button>
            </Link>
          </div>
          <div className={styles.right_buttons_container}>
              <button>Kiwi</button>
          </div>
        </div>
        <div className={styles.text_container}>
          <div className={styles.text_flex}>
            <h2>Visite a página do estabelecimento</h2>
            <p>Entre na fila e aguarde <span>em casa</span></p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default PageHeader