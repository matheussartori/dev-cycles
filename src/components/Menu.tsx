import styles from '../styles/components/Menu.module.css'

import { FiHome } from 'react-icons/fi'
import { RiMedalLine } from 'react-icons/ri'

export function Menu() {
  return (
    <div className={styles.container}>
      <img src="/icons/small-logo.svg" alt="Move it" />
      <nav>
        <div className={styles.active}><img src="/icons/hover.svg" /><FiHome size={30} /></div>
        <div><RiMedalLine size={30} /></div>
      </nav>
    </div>
  )
}