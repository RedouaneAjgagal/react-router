import React from 'react'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.list}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav