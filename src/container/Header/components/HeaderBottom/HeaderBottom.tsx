import SearchBox from 'components/inputs/SearchBox'
import Navbar from 'components/menus/Navbar'
import Icon from 'components/parts/Icon'
import ScreenChecker from 'components/utils/ScreenChecker'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderBottom.module.less'

export const HeaderBottom: React.FC = () => {
    const [findVisible, setFindVisible] = useState<boolean>(false)

    const SearchEnterPressHandler = (value: string) => {}

    return (
        <div className={styles.headerbottom}>
            <div className={styles.left}>
                <Link to={getPath(Paths.home)}>
                    <Icon name='logo' size={36} />
                </Link>
            </div>

            <div className={styles.medium}>
                <ScreenChecker desktop>
                    <Navbar />
                </ScreenChecker>
                <div className={`${styles.medium__searchbox} ${findVisible && styles.show}`}>
                    <SearchBox
                        callback={SearchEnterPressHandler}
                        placeholder='Search entiere store here...'
                    />
                </div>
            </div>

            <div className={styles.right}>
                <ScreenChecker desktop>
                    <div
                        className={styles.right__find}
                        onClick={() => setFindVisible(!findVisible)}
                    >
                        {findVisible ? <Icon name='close' /> : <Icon name='find' />}
                    </div>
                </ScreenChecker>
                <div className={styles.right__cart}>
                    <Icon name='cart' />
                </div>
                <div className={styles.right__account}>
                    <Icon name='profile' color='#0156ff' />
                </div>
            </div>
        </div>
    )
}
