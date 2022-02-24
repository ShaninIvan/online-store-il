import React, { useState } from 'react'
import styles from './PageNotFound.module.less'
import { useNavigate } from 'react-router-dom'

export const PageNotFound: React.FC = () => {
    const [timer, setTimer] = useState<number>(3)
    const navigate = useNavigate()

    const interval = setInterval(() => {
        if (timer > 0) {
            setTimer(timer - 1)
        } else {
            clearInterval(interval)
            navigate('/')
        }
    }, 1000)

    return (
        <div className={styles.pagenotfound}>
            Page not found. Redirect to home page in {timer}
        </div>
    )
}
