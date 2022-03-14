import Button from 'components/buttons/Button'
import TextBox from 'components/inputs/TextBox'
import React, { FormEvent } from 'react'
import styles from './FooterTop.module.less'

export const FooterTop: React.FC = () => {
    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles.footertop}>
            <div className={styles.text}>
                <h2>Sign Up To Our Newsletter.</h2>
                Be the first to hear about the latest offers.
            </div>
            <form className={styles.form} onSubmit={(event) => formSubmitHandler(event)}>
                <TextBox type='email' name='email' placeholder='Your Email' required />
                <Button preset='blue-white'>Subscribe</Button>
            </form>
        </div>
    )
}
