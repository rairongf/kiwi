import styles from './index.module.css'
import { useRouter } from 'next/router';

function EstablishmentIMG({props}){
  const router = useRouter()

  function handleClick(){
    router.push(`/estabelecimento/${props.id}`, `/estabelecimento/${props.name}`)
  }

  return (
    <img className={styles.img}
      onClick={handleClick}
      src={props.src} 
      alt={props.name} 
    />
  )
}

export default EstablishmentIMG