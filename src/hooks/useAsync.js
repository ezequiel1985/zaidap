import { useEffect } from 'react'

export const useAsync = (
    setLoading, 
    asyncFn, 
    successFn, 
    errorFn,
    dependencies=[] 
    ) => {
    useEffect(() => {
        setLoading(true)

        let isActive = true

        asyncFn().then(result => {
            if (isActive) successFn(result)
        }).catch(error => {
            if (isActive) errorFn && errorFn(error)
        }).finally(() => {
            if (isActive) setLoading(false)
        })
        return () => {
            isActive = false
        }
    }, dependencies) //las paso desde itemDetailContainer
}