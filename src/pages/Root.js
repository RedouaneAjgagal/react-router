import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import style from './Root.module.css'
const Root = () => {
    return (
        <>
            <Nav />
            <main className={style.main}>
                <Outlet />
            </main>
        </>
    )
}

export default Root