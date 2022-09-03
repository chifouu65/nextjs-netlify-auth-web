import styles from '../styles/Guides.module.css'
import {useContext, useEffect, useState} from "react";
import AuthContext from "../stores/authContext";

export default function Guides() {

    const { user, authReady } = useContext(AuthContext)
    const [ guides, setGuides ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        if (authReady) {
            fetch('/.netlify/functions/guides', user && {
                headers: {
                    Authorization: 'Bearer ' + user.token.access_token
                }
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('You must be logged in to view this content !')
                    }
                    return res.json()
                })
                .then(data => {
                    setGuides(data)
                    setError(null)
                })
                .then(guides => console.log(guides))
                .catch((err) => {
                    setError(err.message)
                    setGuides(null)
                })
        }
    }, [user])

    return (
        <div className={styles.guides}>
            {!authReady && <div>Loading..</div>}
            {error && ( <div className={styles.error}><p>{error}</p></div>)}
            {guides && guides.map(guide => (
                <div key={guide.title} className={styles.card}>
                    <h3>Wrtitt by {guide.title}</h3>
                    <h4>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</h4>
                </div>
                ))}
        </div>
    )
}