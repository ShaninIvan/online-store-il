import Button from 'components/buttons/Button'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navResetMenu, navSetLevel1 } from 'store/slices/navbarSlice'
import { CategoryType } from 'types/CategoryType'
import styles from './Navbar.module.less'

const getLevel = (category: CategoryType) => {
    return {
        level: category.subcategories ?? [],
        parent: category.id,
    }
}

export const Navbar: React.FC = () => {
    const { categories } = useAppSelector((state) => state.categories)
    const { parent1 } = useAppSelector((state) => state.navigation)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const mains = categories.filter((category) => category.parent === null)

    return (
        <nav className={styles.navbar} onMouseLeave={() => dispatch(navResetMenu())}>
            {mains.map((category) => {
                return category.subcategories.length > 0 ? (
                    <div
                        key={category.id}
                        className={`${styles.main} ${category.id === parent1 && styles.parent}`}
                        onMouseEnter={() => dispatch(navSetLevel1(getLevel(category)))}
                        onClick={() => navigate(getPath(Paths.catalog, { id: category.id }))}
                    >
                        {category.name}
                    </div>
                ) : (
                    <div key={category.id}>{category.name}</div>
                )
            })}
            <Button preset='tranparent-blue'>Our Deals</Button>
            <div className={`${styles.submenu} ${parent1 && styles.show}`}></div>
        </nav>
    )
}
