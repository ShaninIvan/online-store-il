import Button from 'components/buttons/Button'
import TextBox from 'components/inputs/TextBox'
import useAppDispatch from 'hooks/useAppDispatch'
import React, { useRef } from 'react'
import { userRegister } from 'store/slices/userSlice'
import styles from './Register.module.less'

export const PageLoginRegister: React.FC = () => {
    const dispatch = useAppDispatch()

    const form: React.LegacyRef<HTMLFormElement> = useRef(null)

    const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!form.current) return

        const formdata = new FormData(form.current)

        dispatch(userRegister(formdata))
    }

    return (
        <div className={styles.register}>
            <h3>Guests</h3>
            <div>Fill in the fields below and submit the form.</div>
            <form ref={form} onSubmit={(event) => formSubmitHandler(event)}>
                <TextBox type='text' name='username' label='Name' required />
                <TextBox type='email' name='email' label='Email' required />
                <TextBox type='password' name='password' label='Password' required />
                <Button preset='blue-white'>Sign Up</Button>
            </form>
        </div>
    )
}
