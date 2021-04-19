import { useState, useEffect } from 'react'
import { isSmartphone } from './userAgent'

export function useUserAgent() {
    const [ state, setState ] = useState(isSmartphone()? 'sp': 'pc')
    
    useEffect(() => {
        console.log('useEffect')
        function handleResize() {
            setState(isSmartphone()? 'sp': 'pc')
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return state
}