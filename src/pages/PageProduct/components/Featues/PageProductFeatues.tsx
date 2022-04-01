import React from 'react'
import styles from './Featues.module.less'

export const PageProductFeatues: React.FC = () => {
    return (
        <div className={styles.featues}>
            <div className={styles.title}>Featues</div>
            <div className={styles.description}>
                The MPG series brings out the best in gamers by allowing full expression in color
                with advanced RGB lighting control and synchronization.
            </div>

            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src='https://i.onthe.io/smngoz7gqfpbmuibd.30a8a0ba.png' alt='intel' />
                    </div>
                    <div className={styles.item__text}>
                        <b>Intel® Core™ i7</b> processor with the upmost computing power to bring
                        you an unparalleled gaming experience.
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src='https://i.onthe.io/smngoz1vvm7q1v1a5o.484f98d6.png' alt='RTX' />
                    </div>
                    <div className={styles.item__text}>
                        The new <b>GeForce® RTX SUPER™</b> Series has more cores and higher clocks
                        for superfast performance compared to previous-gen GPUs.
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src='https://i.onthe.io/smngoz1pdd28h6ndj8.2cc50eec.png' alt='SSD' />
                    </div>
                    <div className={styles.item__text}>
                        Unleash the full potential with the latest <b>SSD technology</b>, the NVM
                        Express. 6 times faster than traditional SATA SSD.
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src='https://i.onthe.io/smngoze1olr6fmhia.4aa7be55.png' alt='DDR4' />
                    </div>
                    <div className={styles.item__text}>
                        Featuring the latest <b>10th Gen Intel® Core™</b> processors, memory can
                        support up to DDR4 2933MHz to delivers an unprecedented gaming experience.
                    </div>
                </div>
            </div>
        </div>
    )
}
