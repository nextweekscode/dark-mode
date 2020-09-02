import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

 export const useDarkMode = (initialValue) => {
    const [mode, setMode] = useLocalStorage("darkmode", initialValue)
    useEffect(() => {
        if (mode === true){
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    }, [mode])

    return [mode, setMode]
}
