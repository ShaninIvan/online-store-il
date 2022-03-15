import SmallCard from 'components/cards/SmallCard'
import Icon from 'components/parts/Icon'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import useSettings from 'hooks/useSettings'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './CardSlider.module.less'

type PropsType = {
    products: ProductType[]
    withControls?: boolean
    offset?: number
}

type SliderStateType = {
    sliderWidth: number
    offset: number
    currentOffset: number
    maxOffset: number
}

const initialState: SliderStateType = {
    sliderWidth: 0,
    offset: 0,
    currentOffset: 0,
    maxOffset: 0,
}

export const CardSlider: React.FC<PropsType> = ({
    products,
    withControls = false,
    offset = 300,
}) => {
    const [state, setState] = useState<SliderStateType>(initialState)

    const slidertRef: React.LegacyRef<HTMLDivElement> = useRef(null)
    const contentRef: React.LegacyRef<HTMLDivElement> = useRef(null)

    useEffect(() => {
        const sliderWidth = slidertRef.current?.clientWidth || 0
        const contentWidth = contentRef.current?.scrollWidth || 0

        const newState: SliderStateType = {
            sliderWidth: sliderWidth,
            offset: offset,
            currentOffset: 0,
            maxOffset: contentWidth - sliderWidth,
        }

        setState(newState)
    }, [offset])

    const { discount } = useSettings()

    const navigate = useNavigate()

    const openCatalog = (id: number | string) => {
        navigate(getPath(Paths.catalog, { id: id }))
    }

    const slideLeftHandler = () => {
        if (state.currentOffset <= 0) return
        setState({ ...state, currentOffset: state.currentOffset - state.offset })
    }

    const slideRightHandler = () => {
        if (state.currentOffset >= state.maxOffset) return
        setState({ ...state, currentOffset: state.currentOffset + state.offset })
    }

    if (!withControls)
        return (
            <div className={styles.content}>
                {products.map((product) => (
                    <SmallCard
                        key={product.id}
                        product={product}
                        discount={discount}
                        onCardClick={openCatalog}
                    />
                ))}
            </div>
        )

    return (
        <div className={styles.cardslider} ref={slidertRef}>
            <div className={styles.prev} onClick={() => slideLeftHandler()}>
                <Icon name='arrowleft' />
            </div>

            <div
                className={styles.content}
                ref={contentRef}
                style={{ right: `${state.currentOffset}px` }}
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

            <div className={styles.next} onClick={() => slideRightHandler()}>
                <Icon name='arrowright' />
            </div>
        </div>
    )
}
