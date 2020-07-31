import Head from 'next/head'
import styles from './dashboard.module.css'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export default function Dashboard(){
    return <>
        <Head>
        <title>Dashboard - Kiwi</title>
        </Head>
        <div className={styles.container}>
            <header>
                <div>
                    <button>Kiwi Icon</button>
                    <button>Seguindo</button>
                </div>
                <div>
                    <button><ExitToAppOutlinedIcon /></button>
                </div>
            </header>

            <main>
                MAIN
            </main>

            <footer>
                FOOTER
            </footer>
            
        </div>
        <style jsx>{`
            header {
                width: 100%;
                display: flex;
                flex-orientation: row;
                height: 7vh;
                background-color: #563429;
                box-shadow: 0px 1.75px rgba(0, 0, 0, 0.55);
                justify-content: space-between;
            }
            header div {
            }
            header button {
                padding: 0 9px 0 9px;
                height: 100%;
                outline: 0;
                border: solid 2px #f2ecae;
                background-color: #563429;
                cursor: pointer;
                color: #f2ecae;
                font-size: 2.75vh;
                align-items: center;
                justify-content: center;
            }
            header button:hover {
                border-bottom: solid 2px #f2ecae;
            }
            main {
                border: 0;
            }
            footer {
                border: 0;
            }
        `}</style>
    </>
}