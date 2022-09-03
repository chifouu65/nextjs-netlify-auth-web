import styles from '../styles/Guides.module.css'
import {useEffect} from "react";

export default function Guides() {

    useEffect(() => {
        fetch('/.netlify/functions/guides')
            .then(res => res.json())
            .then(guides => console.log(guides))
    }, [])

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div> 
  )
}