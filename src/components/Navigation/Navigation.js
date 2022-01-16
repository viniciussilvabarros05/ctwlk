import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import styles from './navigation.module.scss'

export function Navigation() {

    return (
        <div className={styles.container}>
            <p>Navigation</p>
            <nav className={styles.navigation}>
                <NavLink to="/newMarket">
                    <AiOutlineAppstoreAdd size="24" />
                    New market
                </NavLink>

                <NavLink to="/">
                    <AiOutlineOrderedList size="24" />
                    supermarkets
                </NavLink>
            </nav>
        </div>

    )
}