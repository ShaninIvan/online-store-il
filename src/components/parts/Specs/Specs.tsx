import React from 'react'
import { SpecType } from 'types/ProductType'
import styles from './Specs.module.less'

type PropsType = {
    data: SpecType[]
}

export const Specs: React.FC<PropsType> = ({ data }) => {
    return (
        <div className={styles.specs}>
            {data.map(({ id, name, value }) => (
                <div key={id} className={styles.spec}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.value}>{value}</div>
                </div>
            ))}
        </div>
    )
}
