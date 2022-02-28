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
    size = 16,
    color = '#000000',
    background = '#ffffff',
}) => {
    const styles = {
        fontSize: `${size}px`,
        color: color,
        backgroundColor: background,
    }

    return <div className={`icon-${name}`} style={styles}></div>
}
