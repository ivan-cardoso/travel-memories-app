import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import useAuth from '../../hooks/useAuth'
import { loginUser } from '../../store/actions/user'

const Login = () => {

  const { handleSubmit, handleChange, handleOnSuccessGoogle} = useAuth()

  return (
    <>
      <div> Login</div>
      <form
        onSubmit={(e)=>handleSubmit(e, loginUser)}
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