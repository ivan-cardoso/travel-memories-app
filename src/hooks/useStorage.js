import React, { useState } from 'react'

const useStorage = () => {
    const [user, setUser] = useState("")

    return {
        user, setUser
    }
}

export default useStorage