import jwt_decode from "jwt-decode";


const useStorage = () => {
    const isLogged =  () => {
        const userToken = localStorage.getItem('userToken')
        if (userToken) {
            const user =  jwt_decode(userToken)
            return {
                user : {
                    email : user.email,
                    id : user.id
                }
            }
        }
        return null
    }
    return {
        isLogged
    }
}

export default useStorage