import { useState, useEffect } from 'react'

const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem(key)
        return saved !== null ? JSON.parse(saved) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default useLocalStorageState