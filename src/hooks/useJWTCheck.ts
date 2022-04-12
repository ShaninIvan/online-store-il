import getPath from 'core/routing/getPath'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppSelector from './useAppSelector'

const useJWTCheck = () => {
    const { jwt } = useAppSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (!jwt) navigate(getPath('/login'))
    }, [jwt, navigate])
}

export default useJWTCheck
