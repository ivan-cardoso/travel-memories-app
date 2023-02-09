import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import PostCard from '../PostCard/PostCard';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';

const Carousel = ({ data, optionalText, optionalRedirect }) => {
    return (
        <div className='px-4 sm:px-10 md:px-16 lg:px-20 2xl:px-32 3xl:px-40'>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=""
                style={{ 'padding': '1.5rem' }}
            >
                {data.map((e) => {
                    return (
                        <SwiperSlide style={{ 'width': 'auto', 'height': 'auto' }} key={e._id}>
                            <PostCard data={e} />
                        </SwiperSlide>
                    )
                })}

                {optionalText &&
                    <SwiperSlide style={{ 'width': 'auto', 'height': 'auto', 'display': 'flex' }} className='flex items-center justify-center'>
                        <Link to={optionalRedirect ? optionalRedirect : './'}>
                            <Button variant={'action'}>
                                {optionalText}
                            </Button>
                        </Link>
                    </SwiperSlide>
                }
            </Swiper>
        </div>
    )
}

export default Carousel