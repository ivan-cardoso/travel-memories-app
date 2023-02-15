import React from 'react'
import { Field } from 'formik'

import { ReactComponent as Eye } from '../../images/ui/eye.svg'

const TextInput = ({ label, placeholder, width, name, variant, type }) => {

    const handleShowPassword = () => {
        const input = document.getElementById(name)
        if (input.type === 'password') {
            input.type = 'text'
        } else {
            input.type = 'password'
        }
    }
    return (

        <div className={`flex flex-col ${width ?? 'w-full'} relative`}>
            <label
                className={`
                    font-body 2xl:text-xl 3xl:text-2xl font-semibold text-slate-900
                `}
                htmlFor={name}>
                {label}
            </label>
            <Field
                id={name}
                placeholder={placeholder}
                type={type ?? "text"}
                name={name}
                className={`
                    text-base  text-variant_light transition duration-200 ease-in-out font-body
                    h-9  2xl:h-11 3xl:h-14 rounded-full px-2 2xl:px-4 3xl:px-6
                    2xl:text-lg 3xl:text-xl
                    border-2 border-variant_light  3xl:border-4 focus:outline-none  focus:border-primary_blue
                `}
            />

            {type === 'password' &&
                <div className='h-9  2xl:h-11 3xl:h-14  w-4 absolute bottom-0 right-3 2xl:right-6 3xl:right-8 flex items-center justify-center'>
                    <div onClick={handleShowPassword} className=' cursor-pointer'>
                        <Eye fill='#3a5adf' className='w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-9 3xl:h-9' />
                    </div>
                </div>
            }
        </div>
    )
}

export default TextInput
