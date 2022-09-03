import styles from '../styles/Guides.module.css'
import {useEffect} from "react";

export default function Guides() {

    useEffect(() => {
        fetch('./netlify/function/guides')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div> 
  )
}