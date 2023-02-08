import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import PostCard from '../../components/PostCard/PostCard';
import { getAllPosts } from '../../store/actions/posts'

const Home = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <div className='
        px-10 sm:px-16 md:px-24 py-10 w-full bg-red-300
        '>

        {posts ?

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {posts.map((e) => {
              return (
                <SwiperSlide style={{ 'width': '18rem' }} key={e._id}>
                  <PostCard data={e} />
                </SwiperSlide>
              )
            })}
            <SwiperSlide style={{ 'width': '5rem', 'height': 'auto', 'display': 'flex' }} className='flex items-center justify-center'>
              <p className='bg-white'>
                VER MAS
              </p>
            </SwiperSlide>
          </Swiper>

          : <>Cargando...</>
        }
      </div>
    </>
  )
}

export default Home