import { createContext, useState } from 'react'

export const ContextApp = createContext({})

export function UseContenxtProvider(props) {

    const [editModel, setEditModel] = useState(false)
    const [marketPropsCard, setMarketPropsCard] = useState({})
    return (
        <ContextApp.Provider value={{
            editModel,
            setEditModel,
            marketPropsCard,
            setMarketPropsCard
        }}>
            {props.children}
        </ContextApp.Provider>
    )
}