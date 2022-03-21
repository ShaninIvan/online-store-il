import Button from 'components/buttons/Button'
import TextBox from 'components/inputs/TextBox'
import getPath from 'core/routing/getPath'
import useAppDispatch from 'hooks/useAppDispatch'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from 'store/slices/userSlice'
import styles from './Auth.module.less'

export const PageLoginAuth: React.FC = () => {
    const dispatch = useAppDispatch()

    const form: React.LegacyRef<HTMLFormElement> = useRef(null)

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!form.current) return

        const formdata = new FormData(form.current)

        if (!formdata.has('identifier') || !formdata.has('password')) return

        dispatch(userAuth(formdata))
    }

    return (
        <div className={styles.auth}>
            <h3>Registered Customers</h3>
            <div>If you have an account, sign in with your email address.</div>
            <form ref={form} onSubmit={(event) => formSubmitHandler(event)}>
                <TextBox type='email' name='identifier' label='Email' required />
                <TextBox type='password' name='password' label='Password' required />
                <div className={styles.controls}>
                    <Button preset='blue-white'>Sign In</Button>
                    <Link to={getPath('/login')}>Forgot Your Password?</Link>
                </div>
            </form>
        </div>
    )
}
