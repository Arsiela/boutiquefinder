import { useState } from 'react'
function ClassNavbar(){
    return(
        <>
        <header>
            <nav className='navbar'>
                <h1>DRESS ME APP</h1>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
        </>
    )
}

export default ClassNavbar