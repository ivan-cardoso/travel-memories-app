import React from 'react'

const Button = ({ children, variant, type }) => {
  return (
    <button
      type={type}
      className={`
            font-title text-base font-medium  flex items-center justify-center rounded-full shadow-md
            border-2 transition duration-200 ease-linear hover:shadow-lg
            px-6 h-12
            md:px-11 md:h-14 
            2xl:px-14 2xl:h-16 2xl:text-xl 2xl:border-[3px]
            3xl:px-20 3xl:h-20 3xl:text-2xl 3xl:border-4
            ${variant === 'primary' && 'bg-white text-primary_blue hover:border-primary_blue hover:shadow-white/50'}
            ${variant === 'secondary' && 'bg-primary_orange text-white border-primary_orange hover:border-white hover:bg-white hover:text-black hover:shadow-white/50'}
            ${variant === 'transparent' && 'bg-transparent text-white border-white hover:bg-white hover:text-black hover:shadow-white/50'}
            ${variant === 'action' && 'bg-primary_blue text-white border-primary_blue hover:shadow-primary_blue/50'}
        `}>
      {children}
    </button>
  )
}

export default Button