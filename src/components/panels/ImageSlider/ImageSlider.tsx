import Icon from 'components/parts/Icon'
import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './ImageSlider.module.less'

type PropsType = {
    images: {
        url: string
        alt: string
    }[]
}

export const ImageSlider: React.FC<PropsType> = ({ images }) => {
    const [imgIndex, setImgIndex] = useState<number>(0)

    const nextClickHandler = () => {
        if (imgIndex < images.length - 1) {
            setImgIndex(imgIndex + 1)
        } else {
            setImgIndex(0)
        }
    }

    const prevClickHandler = () => {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1)
        } else {
            setImgIndex(images.length - 1)
        }
    }

    return (
        <div className={styles.imageslider}>
            <div className={styles.prev} onClick={() => prevClickHandler()}>
                <Icon name='arrowleft' />
            </div>

            <TransitionGroup className={styles.content}>
                <CSSTransition
                    key={imgIndex}
                    classNames={{ enter: styles.slideEnter, exit: styles.slideExit }}
                    timeout={1000}
                >
                    <img src={images[imgIndex].url} alt={images[imgIndex].alt} />
                </CSSTransition>
            </TransitionGroup>

            <div className={styles.next} onClick={() => nextClickHandler()}>
                <Icon name='arrowright' />
            </div>
        </div>
    )
}
