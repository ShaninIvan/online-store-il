import Button from 'components/buttons/Button'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import styles from './PageLogin.module.less'

export const PageLogin: React.FC = () => {
    const { jwt } = useAppSelector((state) => state.user)
    const navigate = useNavigate()

    if (jwt) {
        return <Navigate to='/' />
    }

    const createAccountClickHandler = () => {
        navigate(getPath('/login/register'))
    }

    return (
        <div className={styles.pagelogin}>
            <h2>Customer Login</h2>
            <div className={styles.forms}>
                <Outlet />
                <div className={styles.offer}>
                    <h3>New Customer?</h3>
                    <div>Creating an account has many benefits:</div>
                    <ul>
                        <li>Check out faster</li>
                        <li>Keep more than one address</li>
                        <li>Track orders and more</li>
                    </ul>

                    <Button preset='blue-white' onClick={() => createAccountClickHandler()}>
                        Create An Account
                    </Button>
                </div>
            </div>
        </div>
    )
}
