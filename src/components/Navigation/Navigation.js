import { useContext, useEffect } from 'react'
import { AiOutlineAppstoreAdd, AiOutlineClose, AiOutlineOrderedList } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { ContextApp } from '../../contexts/useContext'
import styles from './navigation.module.scss'

export function Navigation() {
    const { menuLateral, setMenuLateral, hideMenu, setHideMenu } = useContext(ContextApp)
    const widthClient = document.documentElement.clientWidth;


    document.body.onresize = function () {
        if (document.body.clientWidth < 501) {
            setMenuLateral(true)
        } else {
            setMenuLateral(false)
        }
    }
    useEffect(() => {
        if (widthClient < 501) {
            setMenuLateral(true)
        }

    }, [])

    return (
        <div className=
            {
                !hideMenu ?
                    `${styles.container} ${styles.showMenu}`
                    :
                    `${styles.container} ${styles.hideMenu}`
            }>

            {!!menuLateral && <AiOutlineClose size="25" onClick={() => { setHideMenu(true) }} />}
            <p>Navigation</p>

            <nav className={styles.navigation}>

                <NavLink to="/newMarket" onClick={() => { setHideMenu(true) }}>
                    <AiOutlineAppstoreAdd size="24" />
                    Create a New Market
                </NavLink>

                <NavLink to="/" onClick={() => { setHideMenu(true) }} >
                    <AiOutlineOrderedList size="24" />
                    SuperMarkets
                </NavLink>
            </nav>
        </div>

    )
}