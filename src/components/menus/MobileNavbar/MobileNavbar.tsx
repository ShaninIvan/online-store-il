import React, { useState } from 'react'
import { CategoryType } from 'types/CategoryType'
import styles from './MobileNavbar.module.less'
import TecsImg from 'assets/tecs.png'
import Icon from 'components/parts/Icon'
import Button from 'components/buttons/Button'
import getPath from 'core/routing/getPath'
import useAppDispatch from 'hooks/useAppDispatch'
import {
    navResetMenu,
    navSetLevel1,
    navSetLevel2,
    navSetLevel3,
} from 'store/slices/navigationSlice'
import useAppSelector from 'hooks/useAppSelector'
import { useNavigate } from 'react-router-dom'

const checkSubcategories = (category: CategoryType) => {
    return category.subcategories.length > 0
}

const getLevel = (category: CategoryType, categories: CategoryType[]) => {
    const ids = category.subcategories.map((item) => item.id)

    return {
        level: categories.filter((item) => ids.includes(item.id)),
        parent: {
            id: category.id,
            name: category.name,
        },
    }
}

const emptyLevel = { level: [], parent: null }

export const MobileNavbar: React.FC = () => {
    const { level1, level2, level3, parent1, parent2, parent3 } = useAppSelector(
        (state) => state.navigation
    )
    const { categories } = useAppSelector((state) => state.categories)

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const closeMenu = () => {
        dispatch(navResetMenu())
        setMenuOpen(false)
    }

    const openCatalog = (id: number | string) => {
        navigate(getPath('/catalog/:id', { id: id }))
        closeMenu()
    }

    const mains = categories.filter((category) => category.parent === null)

    return (
        <div className={styles.mobilenavbar}>
            <div className={styles.burger} onClick={() => setMenuOpen(true)}>
                <Icon name='burger' color='#FFFFFF' size={24} />
            </div>
            <div className={`${styles.levels} ${menuOpen && styles.show}`}>
                {/* MAIN LEVEL */}
                <div className={`${styles.level} ${styles.show}`}>
                    <LevelTop menuClose={closeMenu} />
                    <div className={styles.level__bottom}>
                        {mains.map((category) => (
                            <div key={category.id} className={styles.item}>
                                <div
                                    className={styles.item__name}
                                    onClick={() => openCatalog(category.id)}
                                >
                                    {category.name}
                                </div>
                                {checkSubcategories(category) && (
                                    <div
                                        className={styles.item__subs}
                                        onClick={() =>
                                            dispatch(navSetLevel1(getLevel(category, categories)))
                                        }
                                    >
                                        <Icon name='arrowright' size={9} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <Button preset='tranparent-blue' onClick={() => openCatalog('ourdeals')}>
                        Our Deals
                    </Button>
                </div>

                {/* LEVEL 1 */}
                <div className={`${styles.level} ${level1.length > 0 && styles.show}`}>
                    <LevelTop menuClose={closeMenu} />
                    <div className={styles.level__bottom}>
                        <div
                            className={styles.parent}
                            onClick={() => dispatch(navSetLevel1(emptyLevel))}
                        >
                            <Icon name='arrowleft' size={9} />
                            {parent1?.name}
                        </div>
                        {level1.map((category) => (
                            <div key={category.id} className={styles.item}>
                                <div
                                    className={styles.item__name}
                                    onClick={() => openCatalog(category.id)}
                                >
                                    {category.name}
                                </div>
                                {checkSubcategories(category) && (
                                    <div
                                        className={styles.item__subs}
                                        onClick={() =>
                                            dispatch(navSetLevel2(getLevel(category, categories)))
                                        }
                                    >
                                        <Icon name='arrowright' size={9} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* LEVEL 2 */}
                <div className={`${styles.level} ${level2.length > 0 && styles.show}`}>
                    <LevelTop menuClose={closeMenu} />
                    <div className={styles.level__bottom}>
                        <div
                            className={styles.parent}
                            onClick={() => dispatch(navSetLevel2(emptyLevel))}
                        >
                            <Icon name='arrowleft' size={9} />
                            {parent2?.name}
                        </div>
                        {level2.map((category) => (
                            <div key={category.id} className={styles.item}>
                                <div
                                    className={styles.item__name}
                                    onClick={() => openCatalog(category.id)}
                                >
                                    {category.name}
                                </div>
                                {checkSubcategories(category) && (
                                    <div
                                        className={styles.item__subs}
                                        onClick={() =>
                                            dispatch(navSetLevel3(getLevel(category, categories)))
                                        }
                                    >
                                        <Icon name='arrowright' size={9} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* LEVEL 3 */}
                <div className={`${styles.level} ${level3.length > 0 && styles.show}`}>
                    <LevelTop menuClose={closeMenu} />
                    <div className={styles.level__bottom}>
                        <div
                            className={styles.parent}
                            onClick={() => dispatch(navSetLevel3(emptyLevel))}
                        >
                            <Icon name='arrowleft' size={9} />
                            {parent3?.name}
                        </div>
                        {level3.map((category) => (
                            <div key={category.id} className={styles.item}>
                                <div
                                    className={styles.item__name}
                                    onClick={() => openCatalog(category.id)}
                                >
                                    {category.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

type NavbarLevelType = {
    menuClose: () => any
}

const LevelTop: React.FC<NavbarLevelType> = ({ menuClose }) => {
    return (
        <>
            <div className={styles.level__top}>
                <img src={TecsImg} alt='Tecs' />
                <div onClick={() => menuClose()}>
                    <Icon name='close' />
                </div>
                <hr />
            </div>
        </>
    )
}
