import IconNames from 'assets/icons/iconnames'
import React from 'react'

type PropsType = {
    name: IconNames
    size?: number
    color?: string
    background?: string
}

export const Icon: React.FC<PropsType> = ({
    name,
    size = 'inherit',
    color = 'inherit',
    background = 'inherit',
}) => {
    const styles = {
        fontSize: size === 'inherit' ? 'inherit' : `${size}px`,
        color: color,
        backgroundColor: background,
    }

    return <div className={`icon-${name}`} style={styles}></div>
}
