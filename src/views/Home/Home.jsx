import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import "swiper/css";
import "swiper/css/pagination";


import { getAllPosts } from '../../store/actions/posts'
import Carousel from '../../components/Carousel/Carousel';

import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import NavBar from '../../components/NavBar/NavBar';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PostCard from '../../components/PostCard/PostCard';

const Home = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <NavBar />
      <div className='
          w-full flex flex-col gap-y-10
        '>

        <div className='relative'>
          <div className='h-screen w-full bg-hero_mobile bg-center'></div>
          <div className="absolute top-0 bg-[#272727]/50 px-8 py-10  h-full w-full flex flex-col gap-y-6 items-center justify-end">
            <h2 className='text-4xl font-extrabold leading-snug font-body text-white'>
              Explore the Beauty of the world with us
            </h2>
            <p className='font-heading font-bold text-white'>If you like to travel, this is your place! Share your experiences to the world! </p>
            <Link className='' to={'/'}>
              <Button variant={'action'}>Explore</Button>
            </Link>
          </div>
        </div>

        <div className=''>
          <h2 className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 font-title text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl mb-5'>Lastest Memories</h2>

          {posts.length ?
            <Carousel data={posts} optionalText={'See All'} optionalRedirect={'/library'} />
            :
            <div className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 py-5'>
              <PostCard loading={true} />
            </div>
          }

        </div>

        <div>
          <h2 className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 font-title text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl mb-10'>Popular Memories</h2>
          {posts.length ?
            <Carousel data={posts} optionalText={'See All'} optionalRedirect={'/library'} />
            :
            <div className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 py-5'>
              <PostCard loading={true} />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Home