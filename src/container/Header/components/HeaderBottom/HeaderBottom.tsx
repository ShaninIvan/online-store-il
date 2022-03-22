import Button from 'components/buttons/Button'
import SearchBox from 'components/inputs/SearchBox'
import AccountMenu from 'components/menus/AccountMenu'
import MobileNavbar from 'components/menus/MobileNavbar'
import Navbar from 'components/menus/Navbar'
import Popup from 'components/panels/Popup'
import Icon from 'components/parts/Icon'
import ScreenChecker from 'components/utils/ScreenChecker'
import { HeaderSearchFocusContext } from 'container/Header/Header'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderBottom.module.less'

export const HeaderBottom: React.FC = () => {
    const [findVisible, setFindVisible] = useState<boolean>(false)

    const { user } = useAppSelector((state) => state.user)

    const { searchFocus, setSearchFocus } = useContext(HeaderSearchFocusContext)

    const SearchEnterPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchFocus(false)
            event.currentTarget.blur()
        }
    }

    const userImg = user.avatar ? (
        <img src={user.avatar} alt='avatar' />
    ) : (
        <Icon name='profile' size={11} />
    )

    return (
        <div className={`${styles.headerbottom} ${searchFocus && styles.searchfocus}`}>
            <div className={styles.left}>
                <div className={styles.left__logo}>
                    <Link to={getPath('/')}>
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
                    <Popup toggle={userImg}>
                        <AccountMenu />
                    </Popup>
                </div>
            </div>
        </div>
    )
}
