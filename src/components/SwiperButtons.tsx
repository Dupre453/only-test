import React from 'react';
import {useSwiper} from "swiper/react";
import '../scss/components/_swiper-btn.scss'


export const SwiperButtons:React.FC = () => {

    const swiper = useSwiper()
    return (
        <div className='swiper-btns'>
            <button className='swiper-button' onClick={() => swiper.slidePrev()}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2"/>
                </svg>

            </button>
            <button className='swiper-button' onClick={() => swiper.slideNext() }>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2"/>
                </svg>

            </button>
        </div>
    );
};

