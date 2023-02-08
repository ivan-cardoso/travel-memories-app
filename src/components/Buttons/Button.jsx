import React from 'react'

const Button = ({children, variant}) => {
  return (
    <button 
        className={`
            font-title text-base font-medium px-11 h-14 flex items-center justify-center rounded-full shadow-md
            border-2 transition duration-200 ease-linear hover:shadow-lg
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