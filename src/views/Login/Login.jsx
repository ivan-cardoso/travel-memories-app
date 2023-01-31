import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/user'

const Login = () => {

  const dispatch = useDispatch()

  const [values, setValues] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(values))
      .then(res => {
        console.log("RES", res)
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
    </>
  )
}

export default Login