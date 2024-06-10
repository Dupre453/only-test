import React, {useLayoutEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../scss/components/_slider.scss'
import {IPost} from "../models/models";
import {SwiperButtons} from "./SwiperButtons";

type Props = {
    posts:  IPost[];
};



export const Slider:React.FC<Props> = ({posts}:{posts:IPost[]})  =>{

    return (
        <>
            <div className='slider'>
                <Swiper
                    className='swiper-wrapper'
                    spaceBetween={50}
                    slidesPerView={window.innerWidth < 330 ? 2 : 3}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {posts.map((post) => (
                        <div key={post.id}>
                        <SwiperSlide className='swiper-slide'  {...post} >
                            <div className='slide-block' >
                                <div className='slide-block__number'>{post.date}</div>
                                <p className='slide-block__desc'>{post.desc}</p>
                            </div>
                        </SwiperSlide>
                        </div>
                    ))}

                    <SwiperButtons/>
                </Swiper>
            </div>
        </>
    );
};

