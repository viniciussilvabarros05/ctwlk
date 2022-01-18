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
    const [ listFilter, setFilter] = useState([])
    const [editOn, setEdit] = useState(false)
    const { editModel, setEditModel, setMarketPropsCard, search } = useContext(ContextApp)
    const [animationLoading, setAnimationLoading] = useState(false)
   

    async function handleListMarket() {

        try {
            setAnimationLoading(true)
            const Lister = await api.get('list').then(response => {

                setAnimationLoading(false)
                setListMarket(response.data)
            })


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

    useEffect(() => {
        handleListMarket()
    }, [editModel])


    return (
        <div className={styles.container}>
            <Navigation />
            <div className={styles.content}>
                {!!editOn && <p>Select a supermarket</p>}
                <div className={styles.header_list}>

                    <h3>Supermarkets</h3>
                    <button onClick={editMarket}>
                        <AiOutlineEdit />
                        Edit
                    </button>
                </div>
                <div className={styles.list}>
                    {!!animationLoading && <div className={styles.loader}></div>}
                    {listMarket.map(market => {
                        return (
                            <CardList editOn={editOn} setEdit={setEdit} key={market._id} market={market} />
                        )
                    })}
                </div>
            </div>

            {!!editModel && <EditModel setEdit={setEdit} />}
        </div>
    )
}