import { useContext } from "react";
import SlidesMarket from "../components/slidesMarket/slidesMarket";
import { SuperMarketList } from "../components/superMarketList/superMarketList";
import { ContextApp } from "../contexts/useContext";

export function Home() {
    const { showSlide } = useContext(ContextApp)
    return (
        <>
            <SuperMarketList />
            {showSlide ? <SlidesMarket />: ''}

        </>
    )
}