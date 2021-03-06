import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/service">services</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                </ul>
         </nav>      
        </div>
    )
}
