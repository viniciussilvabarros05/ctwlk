
import { useContext, useState } from 'react'
import { ContextApp } from '../../contexts/useContext'
import styles from './superMarketList.module.scss'
export function CardList(props) {
    const { marketPropsCard, setMarketPropsCard } = useContext(ContextApp)
    const { editModel, setEditModel } = useContext(ContextApp)

    const handleEditModelOn = async () => {
        if (!props.editOn) {
            return 
        }
        if (editModel === false) {
            setEditModel(true)
            setMarketPropsCard(props.market)
        } else {
            try {
                setEditModel(false)
                await setMarketPropsCard('')
            } catch {
                return
            }
            setEditModel(true)
            setMarketPropsCard(props.market)
        }
    }

    return (
        <div
            onClick={handleEditModelOn}
            className={marketPropsCard._id !== props.market._id ? !props.editOn ? styles.cardList : `${styles.cardList} ${styles.editOn}` : styles.cardList}>
            <img src={props.market.superMarketMainImage} alt='Image main' />
            <div>
                <div>
                    <h4>Name</h4>
                    <p>{props.market.superMarketName}</p>
                </div>

                <div>
                    <h4>Phone</h4>
                    <p>{props.market.superMarketPhone}</p>
                </div>


            </div>
            <div className={styles.description}>
                <h4>Description</h4>
                <p> {props.market.superMarketDescription}
                </p>
            </div>

        </div>
    )
}