import { useEffect, useState } from "react"

export function useSyncStorage<T>(key: string, initialState: T) {
    const[ state, setState ] = useState(() => {
        const storageValue = localStorage.getItem(key)
        if(storageValue){
            return JSON.parse(storageValue)
        }
        return initialState
    })

    const handleStateChange = (event: StorageEvent) => {
        if(event.key === key){
            setState(JSON.parse(event.newValue || '{}') as T)
        }
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
        window.addEventListener('storage', handleStateChange)

        return () => {
            window.removeEventListener('storage', handleStateChange)
        }

    }, [state, setState])

    return [state, setState]
}