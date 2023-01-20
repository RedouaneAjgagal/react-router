import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.list}>
                    <li>
                        <NavLink to='' className={({isActive}) => isActive ? style.active : null} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className={({isActive}) => isActive ? style.active : null} end>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav