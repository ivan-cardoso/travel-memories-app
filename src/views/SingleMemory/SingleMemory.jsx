import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/Buttons/BackButton'
import Spinner from '../../components/Spinner/Spinner'

import { getSinglePost } from '../../store/actions/posts'

import { ReactComponent as UserIcon } from '../../images/ui/userIcon.svg'
const SingleMemory = () => {
    const dispatch = useDispatch()
    const [memory, setMemory] = useState([])

    const { id } = useParams()

    useEffect(() => {
        dispatch(getSinglePost(id))
            .then(res => {
                setMemory(res.payload)
            })
    }, [dispatch, id]);


    return (
        <>
            {memory._id ?
                <div className='relative bg-light lg:flex lg:gap-x-10'>
                    <div className='lg:w-4/6 lg:py-28 2xl:py-36 3xl:py-48 lg:pl-28 2xl:pl-36 3xl:pl-48'>
                        <div
                            style={{ backgroundImage: `url(${memory.selectedFile})` }}
                            className={`w-full h-[45vh] bg-center bg-no-repeat bg-cover lg:rounded-2xl lg:h-80 2xl:h-[22rem] 3xl:h-[25rem] lg:shadow-xl`}>
                        </div>
                        <div className='absolute top-8 z-20 left-10 sm:left-16 md:left-24 lg:left-28 2xl:left-36 3xl:left-48'>
                            <BackButton />
                        </div>
                        <div className='px-10 sm:px-16 md:px-24 lg:px-0 py-8 '>
                            <h2 className='font-title font-medium text-4xl md:text-3xl 2xl:text-5xl 3xl:text-6xl'>{memory.title}</h2>
                            <div className="pt-2 flex flex-col justify-between gap-y-2">
                                <p className='font-body font-bold text-primary_blue 2xl:text-xl 3xl:text-2xl'>{memory.creator.creatorName}</p>
                                <p className='font-body text-sm font-medium text-variant_light 2xl:text-lg 3xl:text-xl'>Posted on {moment(memory.createdAt).format('D/MM/YYYY')}</p>
                            </div>
                            <div className='mt-5'>
                                <p className='font-body 2xl:text-xl 3xl:text-2xl text-dark_blue whitespace'>
                                    {memory.message}
                                </p>
                                <p className='font-body 2xl:text-xl 3xl:text-2xl text-dark_blue whitespace'>
                                    {memory.message}
                                </p>
                                <p className='font-body 2xl:text-xl 3xl:text-2xl text-dark_blue whitespace'>
                                    {memory.message}
                                </p>
                                <p className='font-body 2xl:text-xl 3xl:text-2xl text-dark_blue whitespace'>
                                    {memory.message}
                                </p>
                                <p className='font-body 2xl:text-xl 3xl:text-2xl text-dark_blue whitespace'>
                                    {memory.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block lg:w-2/6  lg:h-screen lg:sticky lg:top-0 lg:left-0 lg:py-28 2xl:py-36 3xl:py-48 lg:pr-28 2xl:pr-36 3xl:pr-48'>
                        <div className='h-8 w-full bg-dark_blue rounded-t-xl 2xl:rounded-t-2xl relative 2xl:h-10 3xl:h-12'>
                            <div className='h-14 w-14 2xl:h-16 2xl:w-16 3xl:h-20  3xl:w-20  absolute top-2 left-2 2xl:top-4 2xl:left-4 rounded-full bg-primary_orange flex items-center justify-center'>
                                <UserIcon className='lg:w-9 lg:h-9 3xl:w-11 3xl:h-11 ' />
                            </div>
                        </div>
                        <div className='h-8 2xl:h-10 3xl:h-12 w-full rounded-t-xl flex items-end pl-20 2xl:pl-24 3xl:pl-28'>
                            <p className='font-title text-lg font-medium text-dark_blue 2xl:text-2xl 3xl:text-3xl truncate'>{memory.creator.creatorName}</p>
                        </div>
                        <div className='lg:mt-8 2xl:mt-10 3xl:mt-12'>
                            <p className='font-body text-slate-700 2xl:text-xl 3xl:text-2xl'>
                                “At the end of the day your feet should be dirty, your hair messy and your eyes sparkling.”
                            </p>
                        </div>
                    </div>
                </div>
                :
                <div className='h-screen w-full bg-light flex items-center justify-center'>
                    <Spinner />
                </div>
            }
        </>
    )
}

export default SingleMemory