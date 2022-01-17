import styles from './slidesMarket.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs, FreeMode } from 'swiper'
import { useContext, useState } from 'react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs'
import { ContextApp } from '../../contexts/useContext';
SwiperCore.use([FreeMode, Navigation, Thumbs])

export default function SlidesMarket() {
    const { setShowSlide, marketPropsCard } = useContext(ContextApp)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    function handleShowSlide(e) {
        if (e.target.getAttribute('class') === styles.container) {
            setShowSlide(false)
        }

    }
    window.addEventListener('keyup', event => {
        if (event.code === 'Escape')
            setShowSlide(false);
    })

    const formatDescription = ` address: ${marketPropsCard.superMarketLocation.district}, ${marketPropsCard.superMarketLocation.number}-${marketPropsCard.superMarketLocation.street}, ${marketPropsCard.superMarketLocation.city}-${marketPropsCard.superMarketLocation.state}, ${marketPropsCard.superMarketLocation.zip}`
    return (
        <div className={styles.container} onClick={handleShowSlide}>

            <div className={styles.content}>
                <Swiper

                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    className={styles.swiper1}
                >
                    <SwiperSlide className={styles.swiper_slide}>  <img src={marketPropsCard.superMarketMainImage.location} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>   <img src={marketPropsCard.superMarketAdditionalImages[0].location} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>   <img src={marketPropsCard.superMarketAdditionalImages[1].location} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>  <img src={marketPropsCard.superMarketAdditionalImages[2].location} /></SwiperSlide>
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className={styles.swiper2}
                >
                    <SwiperSlide className={styles.swiper_slide}>  <img src={marketPropsCard.superMarketMainImage.location} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>   <img src={marketPropsCard.superMarketAdditionalImages[0].location} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>   <img src={marketPropsCard.superMarketAdditionalImages[1].location} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>  <img src={marketPropsCard.superMarketAdditionalImages[2].location} /></SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.contentInformation}>
                <h2>
                    {marketPropsCard.superMarketName}
                </h2>
                <p>
                    Phone : {marketPropsCard.superMarketPhone}
                </p>
                <p>
                    Description : {marketPropsCard.superMarketDescription}
                </p>
                <p>
                    {formatDescription}
                </p>
            </div>

        </div>
    )
}