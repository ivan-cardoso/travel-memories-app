import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { googleAuth } from "../store/actions/user"
import { logout } from '../store/reducers/user';


const useAuth = () => {
    const [values, setValues] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (values, action, redirect) => {
        setIsLoading(true)
        setError(false)
        dispatch(action(values))
            .then((res) => {
                if (!res.payload) {
                    setError('*Invalid values')
                } else {
                    redirect ? navigate(`/${redirect}`) : navigate(`/`)
                }
            })
            .catch(() => {
                setIsLoading(false)
                setError('*User or password incorrect')
            })
    }

    const handleOnSuccessGoogle = (res) => {
        dispatch(googleAuth(res))
            .then(() => {
                navigate('/')
            })
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate(0)
    }

    return {
        handleChange,
        handleSubmit,
        handleOnSuccessGoogle,
        handleLogout,
        isLoading,
        setIsLoading,
        error,
        setError
    }
}

export default useAuth