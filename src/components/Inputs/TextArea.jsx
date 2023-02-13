import React from 'react'
import { Field } from 'formik'

const TextArea = ({ label, placeholder, width, name, variant }) => {
    return (
        <div className={`flex flex-col ${width ?? 'w-full'}`}>
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
                as="textarea"
                
                id={name}
                placeholder={placeholder}
                type="text"
                name={name}
                className={`
                    text-base  text-variantDark transition duration-200 ease-in-out 
                    h-36  2xl:h-36 3xl:h-42 rounded-lg px-2 py-1.5 resize-none	
                    2xl:text-lg 3xl:text-xl
                    ${variant === 'app' ?
                        'bg-[#F3F3F3] focus:outline-primaryBlue '
                        : 'border-2 border-primaryBlue  3xl:border-4 focus:outline-none  focus:border-primaryPink'}
                `}
            />
        </div>
    )
}

export default TextArea
