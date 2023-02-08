import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAuth from '../../hooks/useAuth'

const NavBar = () => {

  const { userInfo } = useSelector((state) => state.user)
  const { handleLogout } = useAuth()

  console.log('USER INFO', userInfo)

  return (
    <div className=' bg-light flex w-full h-20 px-10 sm:px-16 md:px-24 lg:px-28 2xl:px-36 3xl:px-48 py-10 items-center justify-between'>
      <Link to={'/'}>
        <h1>TMA</h1>
      </Link>
      {!userInfo ?
        <div className='flex gap-x-5'>
          <Link to={'/login'}>Log In</Link>
          <Link to={'/register'}>Sign Up </Link>
        </div>
        :
        <div onClick={handleLogout}>
          <button>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default NavBar