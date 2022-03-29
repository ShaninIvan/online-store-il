import React, { useRef, useState } from 'react'
import styles from './Select.module.less'

type PropsType<T> = {
    options: {
        value: T
        name: string
    }[]
    title?: string
    callback: (value: T) => void
    value?: T
}

export function Select<T>({ options, title, callback, value }: PropsType<T>): React.ReactElement {
    let selected = useRef({ value: options[0].value, name: options[0].name })

    if (value) {
        const chosenInitial = options.find((option) => option.value === value)

        if (chosenInitial) selected.current = chosenInitial
    }

    const [opened, setOpened] = useState<boolean>(false)

    const choseOption = (option: { value: T; name: string }) => {
        callback(option.value)
        selected.current = option
        setOpened(false)
    }

    return (
        <div className={`${styles.select} ${opened && styles.opened}`}>
            <div className={styles.label} onClick={() => setOpened(!opened)}>
                <div className={styles.title}>{title}: </div>
                <div className={styles.chosen}>{selected.current.name}</div>
                <div className={styles.arrow}>
                    <span className='icon-arrowdown'></span>
                </div>
            </div>

            <div className={styles.list}>
                {options.map((option, index) => (
                    <div key={index} onClick={() => choseOption(option)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
