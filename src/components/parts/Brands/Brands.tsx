import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import styles from './Brands.module.less'

export const Brands: React.FC = () => {
    const { brands } = useAppSelector((state) => state.brands)

    return (
        <div className={styles.brands}>
            {brands.map((brand) => (
                <div key={brand.id} className={styles.img}>
                    <img src={brand.image.imageUrl} alt={brand.image.imageAlt} />
                </div>
            ))}
        </div>
    )
}
