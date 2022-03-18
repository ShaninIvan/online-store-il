import Button from 'components/buttons/Button'
import TextBox from 'components/inputs/TextBox'
import React from 'react'
import styles from './Register.module.less'

export const PageLoginRegister: React.FC = () => {
    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles.register}>
            <h3>Guests</h3>
            <div>Fill in the fields below and submit the form.</div>
            <form onSubmit={(event) => formSubmitHandler(event)}>
                <TextBox type='text' name='username' label='Name' required />
                <TextBox type='email' name='email' label='Email' required />
                <TextBox type='password' name='password' label='Password' required />
                <Button preset='blue-white'>Sign Up</Button>
            </form>
        </div>
    )
}
