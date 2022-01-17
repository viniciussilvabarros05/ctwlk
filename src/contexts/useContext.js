import { createContext, useState } from 'react'

export const ContextApp = createContext({})

export function UseContenxtProvider(props) {

    const [editModel, setEditModel] = useState(false)
    const [menuLateral, setMenuLateral] = useState(false)
    const [hideMenu, setHideMenu] = useState(false)
    const [showSlide, setShowSlide] = useState(false)
    const [marketPropsCard, setMarketPropsCard] = useState({})
    return (
        <ContextApp.Provider value={{
            editModel,
            setEditModel,
            marketPropsCard,
            setMarketPropsCard,
            menuLateral,
            setMenuLateral,
            hideMenu,
            setHideMenu,
            showSlide,
            setShowSlide,
        }}>
            {props.children}
        </ContextApp.Provider>
    )
}