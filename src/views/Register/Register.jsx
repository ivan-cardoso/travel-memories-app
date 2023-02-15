import React from 'react'
import { createUser } from '../../store/actions/user'
import { GoogleLogin } from '@react-oauth/google'
import useAuth from '../../hooks/useAuth'

import { ErrorMessage, Form, Formik } from 'formik'

import TextInput from '../../components/Inputs/TextInput'
import TextArea from '../../components/Inputs/TextArea'
import Button from '../../components/Buttons/Button'
import Spinner from '../../components/Spinner/Spinner'
import { useSelector } from 'react-redux'

import { registerValidation } from '../../utils/validations'
import { Link } from 'react-router-dom'

import { ReactComponent as TravelingIllustration } from '../../images/illustrations/trip.svg'


const Register = () => {
    const { handleSubmit, handleOnSuccessGoogle } = useAuth()

    const { loading } = useSelector(state => state.user)

    return (
        <>
            <div className='md:flex w-full'>

                {/* <img src="" className='hidden md:block md:w-1/2 bg-red-300' alt="" /> */}
                <div
                    // style={{ backgroundImage: `url(${heroRegister})` }}
                    className="hidden md:flex md:items-center md:justify-center md:bg-primary_blue md:w-1/2 " >
                    {/* <TravelingIllustration className='w-[28rem] 2xl:w-[34rem] 3xl:w-[40rem]' /> */}
                </div>
                <Formik
                    className=""
                    initialValues={{
                        "name": "",
                        "email": "",
                        "description": "",
                        "password": "",
                    }}
                    validationSchema={registerValidation}
                    onSubmit={(e) => {
                        handleSubmit(e, createUser)
                    }}
                >
                    {({ errors }) => (

                        <div className='
                            flex flex-col bg-light
                            px-10 sm:px-16 lg:px-24 2xl:px-28 3xl:px-32
                            py-12 lg:py-12 2xl:py-20 3xl:py-28
                            w-full md:w-1/2
                            gap-y-1.5 2xl:gap-y-3 3xl:gap-y-5 
                            '>
                            <h2 className='text-center font-medium font-title text-xl md:text-3xl 2xl:text-4xl 3xl:text-5xl mb-5'>
                                Create a TMA <br />
                                account
                            </h2>
                            <Form
                                className='flex flex-col gap-y-6'
                            >

                                <div className='relative'>
                                    <TextInput name={"name"} id={'name'} label={"Name"} width={"w-full"} />
                                    <ErrorMessage
                                        name="name"
                                        component={() => (
                                            <p className="mt-5 text-dark_blue text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
                                                {errors.name}
                                            </p>
                                        )}
                                    />
                                </div>

                                <div className='relative'>
                                    <TextInput name={"email"} id={'email'} label={"E-mail"} width={"w-full"} />
                                    <ErrorMessage
                                        name="email"
                                        component={() => (
                                            <p className="mt-5 text-dark_blue text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
                                                {errors.email}
                                            </p>
                                        )}
                                    />
                                </div>

                                <div className='relative'>
                                    <TextArea name={"description"} id={'description'} label={"Description"} width={"w-full"} />
                                    <ErrorMessage
                                        name="description"
                                        component={() => (
                                            <p className="mt-5 text-dark_blue text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
                                                {errors.description}
                                            </p>
                                        )}
                                    />
                                </div>

                                <div className='relative'>
                                    <TextInput type="password" name={"password"} id={'password'} label={"Password"} width={"w-full"} />
                                    <ErrorMessage
                                        name="password"
                                        component={() => (
                                            <p className="text-dark_blue  text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
                                                {errors.password}
                                            </p>
                                        )}
                                    />
                                </div>

                                <div className='flex items-center justify-center'>

                                    {
                                        !loading ?
                                            <div className="flex items-center justify-center ">
                                                <Button type={'submit'} variant={'action'} >Register</Button>
                                            </div>
                                            :

                                            <div className="flex items-center justify-center ">
                                                <Spinner />
                                            </div>
                                    }
                                </div>



                            </Form>
                            <div className='flex flex-col justify-center items-center mt-2 2xl:mt-3 gap-y-4 2xl:gap-y-5'>
                                <p className='font-body text-variant_light 2xl:text-xl'>or</p>
                                <GoogleLogin
                                    size='large'
                                    onSuccess={(res) => handleOnSuccessGoogle(res)}
                                    onError={() => console.log('SIGN IN GOOGLE FAILED')}
                                />
                                <p className='mt-4 md:mt-2 font-body text-variant_light 2xl:text-xl'>Already have an account? <Link to={'/login'} className="underline text-primary_blue"> Log In </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Register