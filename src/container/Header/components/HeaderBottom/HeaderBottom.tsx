import Button from 'components/buttons/Button'
import SearchBox from 'components/inputs/SearchBox'
import MobileNavbar from 'components/menus/MobileNavbar'
import Navbar from 'components/menus/Navbar'
import Icon from 'components/parts/Icon'
import ScreenChecker from 'components/utils/ScreenChecker'
import { Paths } from 'config/routes'
import { HeaderSearchFocusContext } from 'container/Header/Header'
import getPath from 'core/routing/getPath'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderBottom.module.less'

export const HeaderBottom: React.FC = () => {
    const [findVisible, setFindVisible] = useState<boolean>(false)

    const { searchFocus, setSearchFocus } = useContext(HeaderSearchFocusContext)

    const SearchEnterPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchFocus(false)
            event.currentTarget.blur()
        }
    }

    return (
        <div className={`${styles.headerbottom} ${searchFocus && styles.searchfocus}`}>
            <div className={styles.left}>
                <div className={styles.left__logo}>
                    <Link to={getPath(Paths.home)}>
                        <Icon name='logo' size={36} />
                    </Link>
                </div>
                <ScreenChecker mobile tablet>
                    <MobileNavbar />
                </ScreenChecker>
            </div>
            <ScreenChecker mobile>
                <div className={styles.deals}>
                    <Button preset='transparent-white'>Our deals</Button>
                </div>
            </ScreenChecker>
            <div className={styles.medium}>
                <ScreenChecker desktop>
                    <Navbar />
                </ScreenChecker>
                <div className={`${styles.medium__searchbox} ${findVisible && styles.show}`}>
                    <SearchBox
                        onKeyPress={(e) => SearchEnterPressHandler(e)}
                        onFocus={() => setSearchFocus(true)}
                        placeholder='Search here...'
                    />
                </div>
            </div>

            <div className={styles.right}>
                <ScreenChecker desktop>
                    <div
                        className={styles.right__find}
                        onClick={() => setFindVisible(!findVisible)}
                    >
                        {findVisible ? <Icon name='close' /> : <Icon name='find' size={19} />}
                    </div>
                </ScreenChecker>
                <div className={styles.right__cart}>
                    <Icon name='cart' size={19} />
                </div>
                <div className={styles.right__account}>
                    <Icon name='profile' size={11} />
                </div>
            </div>
        </div>
    )
}
