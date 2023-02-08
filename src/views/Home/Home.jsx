import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import PostCard from '../../components/PostCard/PostCard';
import { getAllPosts } from '../../store/actions/posts'
import Carousel from '../../components/Carousel/Carousel';

import hero1 from '../../images/hero/hero1.jpg'
import hero2 from '../../images/hero/hero2.jpg'
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';

const Home = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <div className='
          w-full flex flex-col gap-y-10
        '>

        <div className='relative'>
          <img src={hero1} className={'hidden sm:flex'} alt="HERO 1 DESK" />
          <img src={hero2} className={'sm:hidden'} alt="HERO 2 MOBILE/ " />
          <div className="absolute top-0 bg-[#272727]/30 p-5  h-full w-full flex flex-col gap-y-4 items-center justify-center text-center">
            <h2 className='text-6xl font-extrabold leading-snug font-body text-white'>
              EXPLORE BEAUTY OF JOURNEY
            </h2>
            <Link className='' to={'/'}>
              <Button variant={'action'}>Explore</Button>
            </Link>
          </div>
        </div>

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