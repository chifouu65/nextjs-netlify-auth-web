import Link from 'next/link'
import {useContext} from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
    const { user, login, logout, authReady } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="container">
            <nav>
                <h1>Gaming Vibes</h1>
                { authReady && (
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/guides"><a>Guides</a></Link></li>
                        {!user && <li onClick={login} className='btn'>Login/Signup</li>}
                        {user && <li><strong>{user.email}</strong></li>}
                        {user && <li onClick={logout} className='btn'>Logout</li>}
                    </ul>
                    )}
            </nav>
            <div className="banner">
                <Image src="/banner.png" width={966} height={276}/>
            </div>
        </div>
    )
}
