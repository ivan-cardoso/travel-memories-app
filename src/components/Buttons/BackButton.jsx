import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ChevronLeft } from '../../images/ui/chevron_left.svg'


const BackButton = () => {
    const navigate = useNavigate()
    
    const handleBack = () =>{
        navigate(-1)
    }

    return (
        <button onClick={handleBack} 
            className='
                p-2.5 bg-light/70 
                shadow-lg rounded-xl transition duration-200 ease-linear hover:shadow-xl
                md:p-3.5
                lg:bg-white
            '>
            <ChevronLeft className='h-6 w-6 md:h-7 md:w-7 2xl:h-9 2xl:w-9' color='#001438'/>
        </button>
    )
}

export default BackButton