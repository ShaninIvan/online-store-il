import Button from 'components/buttons/Button'
import TextArea from 'components/inputs/TextArea'
import TextBox from 'components/inputs/TextBox'
import Breadcrumbs from 'components/parts/Breadcrumbs'
import Icon from 'components/parts/Icon'
import getPath from 'core/routing/getPath'
import useSettings from 'hooks/useSettings'
import React from 'react'
import styles from './PageContacts.module.less'

const crumbs = [
    { name: 'Home', path: getPath('/') },
    { name: 'Contact Us', path: getPath('/contacts') },
]

export const PageContacts: React.FC = () => {
    const { contacts } = useSettings()

    return (
        <div className={styles.pagecontacts}>
            <Breadcrumbs crumbs={crumbs} />
            <h2>Contact Us</h2>
            <div className={styles.grid}>
                <div className={styles.text}>
                    We love hearing from you, our Shop customers. <br />
                    Please contact us and we will make sure to get back to you as soon as we
                    possibly can.
                </div>

                <form className={styles.form}>
                    <TextBox
                        type='text'
                        name='name'
                        label='Your Name'
                        placeholder='Your Name'
                        required
                    />
                    <TextBox
                        type='email'
                        name='email'
                        label='Your Email'
                        placeholder='Your Email'
                        required
                    />
                    <TextBox
                        type='tel'
                        name='phone'
                        label='Your Phone Number'
                        placeholder='Your Phone'
                        required
                    />
                    <TextArea
                        label='What’s on your mind?'
                        name='text'
                        placeholder='Jot us a note and we’ll get back to you as quickly as possible'
                        required
                    />
                    <Button preset='blue-white'>Submit</Button>
                </form>

                <div className={styles.info}>
                    <div className={styles.info__item}>
                        <div className={styles.info__icon}>
                            <Icon name='address' />
                        </div>
                        <div className={styles.info__title}>Address:</div>
                        <div className={styles.info__content}>{contacts.address}</div>
                    </div>

                    <div className={styles.info__item}>
                        <div className={styles.info__icon}>
                            <Icon name='phone-c' />
                        </div>
                        <div className={styles.info__title}>Phone:</div>
                        <div className={styles.info__content}>{contacts.phone}</div>
                    </div>

                    <div className={styles.info__item}>
                        <div className={styles.info__icon}>
                            <Icon name='clock-c' />
                        </div>
                        <div className={styles.info__title}>We are open:</div>
                        <div className={styles.info__content}>
                            <div>Monday - Thursday: 9:00 AM - 5:30 PM</div>
                            <div>Friday 9:00 AM - 6:00 PM</div>
                            <div>Saturday: 11:00 AM - 5:00 PM</div>
                        </div>
                    </div>

                    <div className={styles.info__item}>
                        <div className={styles.info__icon}>
                            <Icon name='email-c' />
                        </div>
                        <div className={styles.info__title}>E-mail:</div>
                        <div className={`${styles.info__content} ${styles.blue}`}>
                            {contacts.email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
