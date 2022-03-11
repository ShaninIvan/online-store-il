import React, { useState } from 'react'
import HeaderBottom from './components/HeaderBottom'
import HeaderTop from './components/HeaderTop'
import styles from './Header.module.less'

export const HeaderSearchFocusContext = React.createContext({
    searchFocus: false,
    setSearchFocus: (status: boolean) => {},
})

export const Header: React.FC = () => {
    const [focus, setFocus] = useState<boolean>(false)

    return (
        <HeaderSearchFocusContext.Provider value={{ searchFocus: focus, setSearchFocus: setFocus }}>
            <header
                className={`${styles.header} ${focus ? styles.searchfocus : styles.nosearchfocus}`}
            >
                <HeaderTop />
                <HeaderBottom />
            </header>
        </HeaderSearchFocusContext.Provider>
    )
}
