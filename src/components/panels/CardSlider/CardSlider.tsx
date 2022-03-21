import SmallCard from 'components/cards/SmallCard'
import Icon from 'components/parts/Icon'
import getPath from 'core/routing/getPath'
import useSettings from 'hooks/useSettings'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './CardSlider.module.less'

type PropsType = {
    products: ProductType[]
    withControls?: boolean
    offset?: number
}

export const CardSlider: React.FC<PropsType> = ({
    products,
    withControls = false,
    offset = 235,
}) => {
    const [currentOffset, setCurrentOffset] = useState<number>(0)
    const [touchClientX, setTouchClientX] = useState<number>(0)

    const sliderRef: React.LegacyRef<HTMLDivElement> = useRef(null)
    const contentRef: React.LegacyRef<HTMLDivElement> = useRef(null)

    const maxOffset =
        sliderRef.current && contentRef.current
            ? contentRef.current.scrollWidth - sliderRef.current.clientWidth
            : 0

    const { discount } = useSettings()

    const navigate = useNavigate()

    const openCatalog = (id: number) => {
        navigate(getPath('/catalog/:id', { id: id }))
    }

    const slideLeftHandler = () => {
        if (currentOffset <= 0) {
            setCurrentOffset(maxOffset)
        } else {
            setCurrentOffset(currentOffset - offset)
        }
    }

    const slideRightHandler = () => {
        if (currentOffset >= maxOffset) {
            setCurrentOffset(0)
        } else {
            setCurrentOffset(currentOffset + offset)
        }
    }

    const touchStartHandler = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchClientX(event.touches[0].clientX)
    }

    const touchEndHandler = (event: React.TouchEvent<HTMLDivElement>) => {
        const diffX = event.changedTouches[0].clientX - touchClientX

        if (diffX > 100) slideLeftHandler()
        if (diffX < -100) slideRightHandler()
    }

    return (
        <div
            className={styles.cardslider}
            ref={sliderRef}
            onTouchStart={(event) => touchStartHandler(event)}
            onTouchEnd={(event) => touchEndHandler(event)}
        >
            {withControls && (
                <div className={styles.prev} onClick={() => slideLeftHandler()}>
                    <Icon name='arrowleft' />
                </div>
            )}

            <div
                className={styles.content}
                ref={contentRef}
                style={{ right: `${currentOffset}px` }}
            >
                {products.map((product) => (
                    <SmallCard
                        key={product.id}
                        product={product}
                        discount={discount}
                        onCardClick={openCatalog}
                    />
                ))}
            </div>

            {withControls && (
                <div className={styles.next} onClick={() => slideRightHandler()}>
                    <Icon name='arrowright' />
                </div>
            )}
        </div>
    )
}
