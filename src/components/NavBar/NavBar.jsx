import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAuth from '../../hooks/useAuth'

const NavBar = () => {

  const { userInfo } = useSelector((state) => state.user)
  const { handleLogout } = useAuth()

  console.log('USER INFO', userInfo)

  return (
    <div className=' bg-light flex w-full h-20 px-24 py-10 items-center justify-between'>
      <Link to={'/'}>
        <h1>TMA</h1>
      </Link>
      {!userInfo ?
        <div className='flex gap-x-5'>
          <Link to={'/login'}>Sign In</Link>
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