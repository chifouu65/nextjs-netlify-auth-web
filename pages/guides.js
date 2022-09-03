import styles from '../styles/Guides.module.css'
import {useContext, useEffect} from "react";
import AuthContext from "../stores/authContext";

export default function Guides() {

    const { user, authReady } = useContext(AuthContext)

    useEffect(() => {
        if (authReady) {
            fetch('/.netlify/functions/guides', user && {
                headers: {
                    Authorization: 'Bearer ' + user.token.access_token
                }
            })
                .then(res => res.json())
                .then(guides => console.log(guides))
        }
    }, [user])

    return (
        <div className={styles.guides}>
            <h2>All Guides</h2>
        </div>
    )
}