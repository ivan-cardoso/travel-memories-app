import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser, googleAuth } from '../../store/actions/user'
import { GoogleLogin } from '@react-oauth/google'

const Register = () => {

    const dispatch = useDispatch()

    const [values, setValues] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(values))
            .then(res => {
                console.log("RES", res)
            })
    }

    const handleOnSuccessGoogle = (res) => {
        dispatch(googleAuth(res))
            .then(data => {
                console.log('RES', data)
            })
    }

    return (
        <>
            <div>Register</div>
            <form
                onSubmit={handleSubmit}
                onChange={handleChange}
                action=""
            >
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />

                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' />

                <button type='submit'>Register</button>
            </form>
            <GoogleLogin
                onSuccess={(res) => handleOnSuccessGoogle(res)}
                onError={() => console.log('SIGN IN GOOGLE FAILED')}
            />
        </>
    )
}

export default Register