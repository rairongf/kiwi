import styles from './establishment.module.css'

function EstablishmentCard(){
  return (
    <div className={styles.container}>
      <img 
        src="https://media.glassdoor.com/sqll/2488756/supermercados-unissul-squarelogo-1554336551039.png" 
        alt="Supermercado Unissul Avenida"
      />
      <div className={styles.infos}>
        <h3>Supermercado Avenida</h3>
      </div>
    </div>
  )
}

export default EstablishmentCard