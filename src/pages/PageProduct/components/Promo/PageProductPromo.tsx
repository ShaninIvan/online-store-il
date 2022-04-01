import React from 'react'
import styles from './Promo.module.less'

export const PageProductPromo: React.FC = () => {
    return (
        <div className={styles.promo}>
            <div className={styles.description}>
                <div className={styles.title}>Outplay the Competittion</div>
                <div className={styles.text}>
                    <p>
                        Experience a 40% boost in computing from last generation. MSI Desktop equips
                        the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to
                        bring you an unparalleled gaming experience.
                    </p>
                    <br />
                    <p>*Performance compared to i7-9700. Specs varies by model.</p>
                </div>
            </div>
            <div className={styles.image}>
                <img src='https://i.onthe.io/smngoz65eekq7kplg.7ebaa4a5.jpg' alt='intel core i7' />
            </div>
        </div>
    )
}
