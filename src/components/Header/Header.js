import { useContext } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiFillAmazonCircle } from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import { ContextApp } from '../../contexts/useContext'
import styles from './header.module.scss'
export function Header() {
    const { hideMenu, setHideMenu, } = useContext(ContextApp)

    function handleHideMenu() {
        if (hideMenu === false) {
            setHideMenu(true)
        } else {
            setHideMenu(false)
        }

    }
    return (
        <header>
            <div className={styles.menuHamburguer} onClick={handleHideMenu}>
                <AiOutlineMenu size="40" onClick={handleHideMenu} />
            </div>

            <img alt='logo' src={logo}></img>
        </header >
    )
}