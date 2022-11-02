import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PostCard from '../../components/PostCard/PostCard';
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
      {posts ? posts.map((e) => {
        return (
          <div key={e._id}>
            <PostCard data={e} />
          </div>
        )
      })
      : <>Cargando...</>
    }
      {console.log('POSTS', posts)}
    </>
  )
}

export default Home