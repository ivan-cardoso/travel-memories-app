import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import PostCard from '../../components/PostCard/PostCard';
import { getAllPosts } from '../../store/actions/posts'
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <div className='
         py-10 w-full flex flex-col gap-y-10
        '>
        <div className=''>
          <h2 className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 font-title text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl mb-5'>Lastest Memories</h2>
          {posts ?
            <Carousel data={posts} />
            : <>Cargando...</>
          }
        </div>

        <div>
          <h2 className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 font-title text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl mb-10'>Popular Memories</h2>
          {posts ?
            <Carousel data={posts} />
            : <>Cargando...</>
          }
        </div>
      </div>
    </>
  )
}

export default Home