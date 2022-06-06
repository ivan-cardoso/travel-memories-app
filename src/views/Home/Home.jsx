import {React,  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from '../../store/actions/posts'

const Home = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
        <h1>HOME</h1>
        {console.log('POSTS', posts)}
    </>
  )
}

export default Home