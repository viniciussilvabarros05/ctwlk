import { useContext, useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { ContextApp } from '../../contexts/useContext'
import api from '../../services/api'
import { EditModel } from '../editModel/editModel'
import { Navigation } from '../Navigation/Navigation'
import { CardList } from './cardList'
import styles from './superMarketList.module.scss'

export function SuperMarketList() {
    const [listMarket, setListMarket] = useState([])
    const [editOn, setEdit] = useState(false)
    const { editModel, setEditModel, setMarketPropsCard } = useContext(ContextApp)

    async function handleListMarket() {
        try {
            const response = await api.get('list')
            setListMarket(response.data)
            console.log(response.data)
        } catch (error) {
            alert(error.message)
        }
    }
    const editMarket = () => {
        if (editOn === false) {
            setEdit(true)
        } else {
            setEdit(false)
            setEditModel(false)
            setMarketPropsCard('')
        }
    }

    useEffect(() => {
        handleListMarket()
    }, [])


    return (
        <div className={styles.container}>
            <Navigation />
            <div className={styles.content}>

                <div className={styles.header_list}>
                    <h3>Supermarkets</h3>
                    {!!editOn && <span>Select a supermarket</span>}
                    <button onClick={editMarket}>
                        <AiOutlineEdit />
                        Edit
                    </button>
                </div>
                <div className={styles.list}>

                    {listMarket.map(market => {
                        return (
                            <CardList editOn={editOn} setEdit={setEdit} key={market._id} market={market} />
                        )
                    })}
                </div>
            </div>

            {!!editModel && <EditModel />}
        </div>
    )
}