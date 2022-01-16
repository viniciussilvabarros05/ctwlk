import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import './header.module.scss'
export function Header() {
    return (
        <header>
            <img alt='logo' src={logo}></img>
            <div>
                <input type='text' placeholder="Search supermarket"></input>
                <AiOutlineSearch size="24" />
            </div>
        </header>
    )
}