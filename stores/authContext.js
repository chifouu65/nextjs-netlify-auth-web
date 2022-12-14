import {createContext, useEffect, useState} from "react";
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
});

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [ authReady, setAuthReady ] = useState(false)

    {/* init netlify user connection */
        useEffect(() => {
            netlifyIdentity.on('login', (user) => {
                setUser(user)
                netlifyIdentity.close()
                console.log('login event')
            })
            netlifyIdentity.on('init', () => {
                setUser(user)
                setAuthReady(true)
                console.log('init event')
            })

            netlifyIdentity.init();
            return () => {
                netlifyIdentity.off('login')
                netlifyIdentity.off('logout')
            }
        }, [])
    }

    netlifyIdentity.on('logout', () => {
        setUser(null)
        console.log('logout event')
    })

    const login = () => {
        netlifyIdentity.open()
    }

    const logout = () => {
        netlifyIdentity.logout()
    }

    const context = { user, login, logout, authReady }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext