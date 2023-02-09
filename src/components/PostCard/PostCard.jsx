import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ data }) => {

  return (
    <Link to={`/memories/${data._id}`} className='flex flex-col bg-light rounded-2xl p-5 xs:p-6  shadow-xl gap-y-3 w-64 sm:w-72 hover:shadow-3xl transition duration-200 ease-linear'>
      <img className='h-48 rounded-2xl shadow-lg' src={data.selectedFile} alt={`${data.title} PREVIEW`} />
      <div className='flex flex-col gap-y-1.5'>
        <h3 className='font-body font-semibold text-lg m-0'>{data.title}</h3>
        <p className='font-body font-normal text-base text-slate-800'>{data.message}</p>
        <div className='flex items-center justify-between'>
          <p className='font-body font-normal text-variant_light  text-sm'>Ivan Cardoso</p>
          <p className='font-body font-normal text-variant_light  text-sm'>Jun 27, 2022</p>
        </div>
        {console.log('data', data)}
      </div>
    </Link>
  )
}

export default PostCard