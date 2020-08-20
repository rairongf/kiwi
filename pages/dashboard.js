import Head from 'next/head'
import PageHeader from '../components/PageHeader'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EstablishmentCard from '../components/EstablishmentCard';

import styles from './dashboard.module.css'

export default function Dashboard(){
    return <>
        <Head>
            <title>Dashboard - Kiwi</title>
        </Head>
        <PageHeader />
        <div id={styles.page_dashboard}>
            <div id={styles.page_dashboard_content} className="container">
                <section className={styles.filas_container}>
                    <h2>Sua posição é #
                        <span style={{color: '#f2ecae'}}>009</span>
                    </h2>
                    <div className={styles.establishment}>
                        <img 
                            src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                            alt="Supermercado Unissul Avenida"
                        />
                        <h3>Supermercado Avenida</h3>
                        <p>Rua Coronel Erasmo Cabral, 226, Centro</p>
                    </div>
                    <div className={styles.fila_positions}>
                        <div className={styles.fila_presencial}>
                            <h4>Fila presencial</h4>
                            <h2>#</h2>
                            <h1>027</h1>
                        </div>
                        <div className={styles.fila_kiwi}>
                            <h4>Fila pelo <span>Kiwi</span> </h4>
                            <h2>#</h2>
                            <h1><span>016</span></h1>
                        </div>
                    </div>
                </section>
                <section className={styles.map_container}>
                    <h2>Mapa</h2>
                </section>
                <section className={styles.fila_infos_container}>
                    <h2>Infos</h2>
                </section>
                <div className={styles.scrollable_containers}>
                    <section className={styles.seguindo_container}>
                        <h2>Seguindo</h2>
                        <div className={styles.following_establishments_list}>
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                            <img 
                                src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
                                alt="Supermercado Unissul Avenida"
                            />
                        </div>
                        <button><ExpandMoreIcon fontSize="large"/></button>
                    </section>
                    <section className={styles.explore_container}>
                        <h2>Explore</h2>
                        <div className={styles.recommended_establishment_list}>
                            <EstablishmentCard />
                            <EstablishmentCard />
                            <EstablishmentCard />
                            <EstablishmentCard />
                            <EstablishmentCard />
                            <EstablishmentCard />
                        </div>
                        <button><ExpandMoreIcon fontSize="large"/></button>
                    </section>
                </div>
            </div>
        </div>
        <style jsx>{`
            main {
                border: 0;
            }
            footer {
                border: 0;
            }
        `}</style>
    </>
}