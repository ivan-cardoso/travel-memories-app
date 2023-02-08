import React from 'react'
import { createUser} from '../../store/actions/user'
import { GoogleLogin } from '@react-oauth/google'
import useAuth from '../../hooks/useAuth'

const Register = () => {
    const { handleSubmit, handleChange, handleOnSuccessGoogle} = useAuth()

    return (
        <>
            <div>Register</div>
            <form
                onSubmit={(e)=>handleSubmit(e, createUser)}
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