import React from 'react'
import { Field } from 'formik'

const TextArea = ({ label, placeholder, width, name, variant }) => {
    return (
        <div className={`flex flex-col ${width ?? 'w-full'}`}>
            <label
                className={`
                font-body 2xl:text-xl 3xl:text-2xl font-semibold text-slate-900`}
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
                    text-base  text-variant_light transition duration-200 ease-in-out font-body
                    h-24  2xl:h-28 3xl:h-36 rounded-xl px-2 py-1.5 resize-none 2xl:px-4 3xl:px-6 
                    2xl:text-lg 3xl:text-xl
                    border-2 border-variant_light  3xl:border-4 focus:outline-none  focus:border-primary_blue
                `}
            />
        </div>
    )
}

export default TextArea
