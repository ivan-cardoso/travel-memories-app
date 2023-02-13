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
                    font-subtitle  2xl:text-xl 3xl:text-2xl
                    ${variant === 'app' ?
                        'text-variantDark font-bold'
                        : 'text-dark font-semibold '}
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
                    text-base  text-variantDark transition duration-200 ease-in-out 
                    h-9  2xl:h-11 3xl:h-14 rounded-lg px-2
                    2xl:text-lg 3xl:text-xl
                    
                    ${variant === 'app' ?
                        'bg-[#F3F3F3] focus:outline-primaryBlue '
                        : 'border-2 border-primaryBlue  3xl:border-4 focus:outline-none  focus:border-primaryPink'}
                `}
            />

            {type === 'password' &&
                <div className='h-9  2xl:h-11 3xl:h-14  w-4 absolute bottom-0 right-3 flex items-center justify-center'>
                    <div onClick={handleShowPassword} className=' cursor-pointer'>
                        <Eye fill='#0069FF' className='w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-9 3xl:h-9'/>
                    </div>
                </div>
            }
        </div>
    )
}

export default TextInput
