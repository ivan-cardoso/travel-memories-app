import React, { useState } from 'react'
import { createUser } from '../../store/actions/user'
import { GoogleLogin } from '@react-oauth/google'
import useAuth from '../../hooks/useAuth'

import * as Yup from 'yup'
import { ErrorMessage, Form, Formik } from 'formik'

import TextInput from '../../components/Inputs/TextInput'
import TextArea from '../../components/Inputs/TextArea'
import Button from '../../components/Buttons/Button'
import Spinner from '../../components/Spinner/Spinner'


const Register = () => {
    const { handleSubmit, handleChange, handleOnSuccessGoogle } = useAuth()

    const validate = Yup.object({
        name: Yup.string().required("*Campo requerido"),
        email: Yup.string()
            .email("*Ingrese mail válido")
            .required("*Campo requerido"),
        description: Yup.string().required("*Campo requerido"),
        password: Yup.string()
            .required("*Campo requerido")
            .min(8, "*Al menos 8 caracteres")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])(?=.{8,})/,
                "*Incluir mayúsculas, números y caracteres especiales"
            ),
        // password2: Yup.string()
        //     .required("*Campo requerido")
        //     .oneOf([Yup.ref("password"), null], "*Las contraseñas deben coincidir"),
        // mall: Yup.string().required("*Campo requerido"),
        // house: Yup.string().required("*Campo requerido"),
        // termsAndConditions: Yup.string().required("*Campo requerido"),
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <>
            {/* <div>Register</div>
            <form
                onSubmit={(e) => handleSubmit(e, createUser)}
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
            /> */}



            <Formik className=""
                initialValues={{
                    "name": "",
                    "email": "",
                    "description": "",
                    "password": "",
                }}
                validationSchema={validate}
                onSubmit={(e) => {
                    // setIsSubmitting(true)
                    handleSubmit(e, createUser)
                    .then(()=>{
                        setIsSubmitting(true)
                    })
                    .catch((err)=>{
                        console.log('ERR', err)
                        setIsSubmitting(true)
                    })
                }}

            >
                {({ errors }) => (

                    <div className='flex flex-col gap-y-1.5 2xl:gap-y-3 3xl:gap-y-5 w-full'>
                        <Form
                            className='flex flex-col gap-y-9'
                        >

                            <div className='relative'>
                                <TextInput  name={"name"} id={'name'} label={"Name"} width={"w-full"} />
                                <ErrorMessage
                                    name="name"
                                    component={() => (
                                        <p className="mt-5 text-primaryPink text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
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
                                        <p className="mt-5 text-primaryPink text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
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
                                        <p className="mt-5 text-primaryPink text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
                                            {errors.description}
                                        </p>
                                    )}
                                />
                            </div>

                            <div className='relative'>
                                <TextInput type="password" name={"password"} id={'password'} label={"Contraseña"} width={"w-full"} />
                                <ErrorMessage
                                    name="password"
                                    component={() => (
                                        <p className="text-primaryPink  text-sm absolute -bottom-6 2xl:text-lg 3xl:text-xl">
                                            {errors.password}
                                        </p>
                                    )}
                                />
                            </div>

                            <div className='flex items-center justify-center'>

                                {
                                    !isSubmitting ?
                                        <div className="flex items-center justify-center ">
                                            <Button type={'submit'} variant={'primary'} size={'lg'} >Continuar</Button>
                                        </div>
                                        :
                                        <button
                                            type="button"
                                            className={`
                                            bg-[#d63351] hover:bg-[#d63351]
                                            font-subtitle font-bold text-white rounded-xl transition duration-200 ease-out
                                            py-2 px-6 w-64 text-sm 2xl:w-72 2xl:text-lg 2xl:px-9 2xl:py-2 3xl:w-80 3xl:text-xl 3xl:px-10 3xl:py-2
                                            '
                                        `}
                                        >
                                            <Spinner />
                                        </button >
                                }
                            </div>



                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default Register