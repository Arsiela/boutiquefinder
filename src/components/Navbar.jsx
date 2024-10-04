import { useState } from 'react'
function Navbar(){
    return(
        <>
        <header>
            <nav className='navbar'>
                <h1>DRESS ME APP</h1>
                    <ul className='nav-links'>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Login</li>
                    </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar