import React from 'react'

const PostCard = ({ data }) => {

  return (
    <div className='flex flex-col bg-light rounded-xl p-4 xs:p-6 sm:p-4 shadow-xl gap-y-3 w-72'>
      <img className='h-48 rounded-xl shadow-md' src={data.selectedFile} alt={`${data.title} PREVIEW`} />
      <div>
        <h3 className='font-body font-semibold text-lg'>{data.title}</h3>
        <p className='font-body font-normal text-sm'>{data.message}</p>
        <p className='font-body font-normal text-sm'>Creator: {data.creator}</p>
        <p className='font-body font-normal text-sm'>Date: {data.createdAt}</p>
        {console.log('data', data)}
      </div>
    </div>
  )
}

export default PostCard