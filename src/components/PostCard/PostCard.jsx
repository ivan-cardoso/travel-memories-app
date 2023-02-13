import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PostCard = ({ data, loading }) => {

  return (
    <>
      {loading ?
        <div className='flex items-center gap-x-8 2xl:gap-x-11 3xl:gap-x-14'>
          <div className={`bg-light rounded-2xl h-[23rem] w-64 sm:w-72 p-6 2xl:w-[22rem] 2xl:h-[27rem] 2xl:p-7 3xl:w-[26rem] 3xl:h-[30rem] 3xl:p-9`}>
            <Skeleton count={13} />
          </div>

          <div className={`hidden md:block bg-light rounded-2xl h-[23rem] w-64 sm:w-72 p-6 2xl:w-[22rem] 2xl:h-[27rem] 2xl:p-7 3xl:w-[26rem] 3xl:h-[30rem] 3xl:p-9`}>
            <Skeleton count={13} />
          </div>

          <div className={`hidden xl:block bg-light rounded-2xl h-[23rem] w-64 sm:w-72 p-6 2xl:w-[22rem] 2xl:h-[27rem] 2xl:p-7 3xl:w-[26rem] 3xl:h-[30rem] 3xl:p-9`}>
            <Skeleton count={13} />
          </div>
        </div>

        :
        <Link to={`/memories/${data._id}`}
          className={`\
            flex flex-col bg-light rounded-2xl  shadow-xl hover:shadow-3xl transition duration-200 ease-linear
            p-5 xs:p-6 gap-y-3 h-[23rem] w-64 sm:w-72 
            2xl:w-[22rem] 2xl:h-[27rem] 2xl:p-7
            3xl:w-[26rem] 3xl:h-[30rem] 3xl:p-9
          `}>
          <img className='h-48 2xl:h-52 3xl:h-64 rounded-2xl shadow-lg' src={data.selectedFile} alt={`${data.title} PREVIEW`} />
          <div className='flex flex-col gap-y-1.5 2xl:gap-y-2 3xl:gap-y-3'>
            <h3 className='font-body font-semibold text-lg m-0 2xl:text-xl 3xl:text-2xl'>{data.title}</h3>
            <p className='font-body font-normal text-base 2xl:text-lg 3xl:text-xl text-slate-800 line-clamp-3'>{data.message}</p>
            <div className='flex items-center justify-between'>
              <p className='font-body font-normal text-variant_light  text-sm 2xl:text-base 3xl:text-lg'>{data.creator.creatorName}</p>
              <p className='font-body font-normal text-variant_light  text-sm 2xl:text-base 3xl:text-lg'>{moment(data.createdAt).format('D/MM/YYYY')}</p>
            </div>
            {console.log('data', data)}
          </div>
        </Link>
      }
    </>
  )
}

export default PostCard