import Button from 'components/buttons/Button'
import TextBox from 'components/inputs/TextBox'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Auth.module.less'

export const PageLoginAuth: React.FC = () => {
    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles.auth}>
            <h3>Registered Customers</h3>
            <div>If you have an account, sign in with your email address.</div>
            <form onSubmit={(event) => formSubmitHandler(event)}>
                <TextBox type='email' name='email' label='Email' required />
                <TextBox type='password' name='password' label='Password' required />
                <div className={styles.controls}>
                    <Button preset='blue-white'>Sign In</Button>
                    <Link to={getPath(Paths.login)}>Forgot Your Password?</Link>
                </div>
            </form>
        </div>
    )
}
