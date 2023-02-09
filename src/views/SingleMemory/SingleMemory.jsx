import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getSinglePost } from '../../store/actions/posts'

const SingleMemory = () => {
    const dispatch = useDispatch()
    const [memory, setMemory] = useState([])

    const { id } = useParams()

    console.log("idparam", id)

    useEffect(() => {
        const getSingleMemory = async () => {
            const post = await dispatch(getSinglePost(id))
            setMemory(post.payload)
        }
        getSingleMemory()
    }, []);


    return (
        <>
            {memory ?
                <div className=''>
                    {console.log("SINGLE MEMORY", memory)}
                    <div
                        style={{ backgroundImage: `url(${memory.selectedFile})` }}
                        className={`w-full h-[45vh] bg-center bg-no-repeat bg-cover`}>
                        {/* <img className='h-full w-auto' src={memory.selectedFile} alt="" /> */}
                    </div>
                    <div className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 py-10'>
                        <h2 className='font-title font-medium text-2xl'>{memory.title}</h2>
                    </div>
                </div>
                : <>Cargando...</>
            }
        </>
    )
}

export default SingleMemory