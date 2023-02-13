import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { googleAuth } from "../store/actions/user"
import { logout } from '../store/reducers/user';


const useAuth = () => {
    const [values, setValues] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (values, action) => {
        // e.preventDefault()
        console.log('values', values)
        dispatch(action(values))
            .then(res => {
                console.log("RES", res)
            })
    }

    const handleOnSuccessGoogle = (res) => {
        dispatch(googleAuth(res))
            .then(data => {
                navigate('/')
                console.log('RES', data)
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
        handleLogout
    }
}

export default useAuth