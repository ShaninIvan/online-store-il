import Icon from 'components/parts/Icon'
import React, { useState } from 'react'
import styles from './SearchBox.module.less'

type PropsType = {
    callback: (value: string) => any
    placeholder?: string
}

export const SearchBox: React.FC<PropsType> = ({ callback, placeholder = '' }) => {
    const [input, setInput] = useState<string>('')

    const handlerKeyPress = (key: string) => {
        key === 'Enter' && input.length > 0 && callback(input)
    }

    return (
        <div className={styles.searchbox}>
            <input
                className={styles.input}
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => handlerKeyPress(e.key)}
                placeholder={placeholder}
            />
            <Icon name='find' color='#0156FF' />
        </div>
    )
}
