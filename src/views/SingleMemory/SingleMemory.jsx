import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/Buttons/BackButton'

import { getSinglePost } from '../../store/actions/posts'

const SingleMemory = () => {
    const dispatch = useDispatch()
    const [memory, setMemory] = useState([])

    const { id } = useParams()

    console.log("idparam", id)

    useEffect(() => {
        // const getSingleMemory = async () => {
        //     const post = await 
        //     setMemory(post.payload)
        // }
        dispatch(getSinglePost(id))
            .then(res =>{
                setMemory(res.payload)
            })
        // getSingleMemory()
    }, []);


    return (
        <>
            {memory ?
                <div className='relative'>
                    {console.log("SINGLE MEMORY", memory)}
                    <div
                        style={{ backgroundImage: `url(${memory.selectedFile})` }}
                        className={`w-full h-[45vh] bg-center bg-no-repeat bg-cover`}>
                        {/* <img className='h-full w-auto' src={memory.selectedFile} alt="" /> */}
                    </div>
                    <div className='absolute top-8 z-20 left-10 sm:left-16 md:left-24 lg:left-28 2xl:left-36 3xl:left-48'>
                        <BackButton />
                    </div>
                    <div className='px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 py-8 '>
                        <h2 className='font-title font-medium text-2xl'>{memory.title}</h2>
                        <div className="pt-2 flex items-center justify-between">
                            <p className='font-body font-bold text-primary_blue'>Ivan Cardoso</p>
                            <p className='font-body font-bold text-variant_light'>{moment(memory.createdAt).format('D/MM/YYYY')}</p>
                            {/* {memory.createdAt} */}
                            {/* memory.creatorId */}
                        </div>
                        <div className='overflow-x-auto mt-6'>
                            <p className='font-body text-dark_blue whitespace'>
                                {memory.message}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos et ullam debitis alias nostrum. Cum cumque perspiciatis perferendis provident dolor consectetur aliquam ratione excepturi, incidunt quisquam, nostrum porro exercitationem.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos et ullam debitis alias nostrum. Cum cumque perspiciatis perferendis provident dolor consectetur aliquam ratione excepturi, incidunt quisquam, nostrum porro exercitationem.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos et ullam debitis alias nostrum. Cum cumque perspiciatis perferendis provident dolor consectetur aliquam ratione excepturi, incidunt quisquam, nostrum porro exercitationem.
                            </p>
                        </div>
                    </div>
                </div>
                : <>Cargando...</>
            }
        </>
    )
}

export default SingleMemory