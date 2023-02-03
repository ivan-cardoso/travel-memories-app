import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, googleAuth } from '../../store/actions/user'
import { GoogleLogin } from '@react-oauth/google'

const Login = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [values, setValues] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(values))
      // .then(res => {
      //   console.log("RES", res)
      //   navigate('/')
      // })
  }

  const handleOnSuccessGoogle = (res) => {
    dispatch(googleAuth(res))
      .then(data => {
        console.log('RES', data)
      })
  }

  return (
    <>
      <div> Login</div>
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        action=""
      >

        <label htmlFor="email">E-mail</label>
        <input type="email" name='email' />

        <label htmlFor="password">Password</label>
        <input type="password" name='password' />

        <button type='submit'>Login</button>
      </form>

      <GoogleLogin
        onSuccess={(res) => handleOnSuccessGoogle(res)}
        onError={() => console.log('SIGN IN GOOGLE FAILED')}
      />
    </>
  )
}

export default Login