import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import useSettings from 'hooks/useSettings'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterMedium.module.less'

export const FooterMedium: React.FC = () => {
    const { categories } = useAppSelector((state) => state.categories)

    const mains = categories.filter((category) => category.parent === null).slice(0, 3)
    const settings = useSettings()

    return (
        <div className={styles.footermedium}>
            <div className={styles.block}>
                <div className={styles.title}>Information</div>
                <div className={styles.list}>
                    <Link to={getPath(Paths.about)}>About Us</Link>
                    <Link to={getPath(Paths.terms)}>About Zip</Link>
                    <Link to={getPath(Paths.terms)}>Privacy Policy</Link>
                    <Link to={getPath(Paths.home)}>Search</Link>
                    <Link to={getPath(Paths.terms)}>Terms</Link>
                    <Link to={getPath(Paths.dashboard)}>Orders and Returns</Link>
                    <Link to={getPath(Paths.contacts)}>Contact Us</Link>
                    <Link to={getPath(Paths.home)}>Advanced Search</Link>
                    <Link to={getPath(Paths.dashboard)}>Newsletter Subscription</Link>
                </div>
            </div>
            {mains.map((main) => (
                <div key={main.id} className={styles.block}>
                    <div className={styles.title}>{main.name}</div>
                    <div className={styles.list}>
                        {main.subcategories.map((category) => (
                            <Link
                                to={getPath(Paths.catalog, { id: category.id })}
                                key={category.id}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <div className={styles.block}>
                <div className={styles.title}>Address</div>
                <div className={styles.list}>
                    <div>Address: {settings.contacts.address}</div>
                    <div>
                        Phones: <span className={styles.blue}>{settings.contacts.phone}</span>
                    </div>
                    <div>We are open: Monday-Thursday: 9:00 AM - 5:30</div>
                    <div>Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 11:00 AM - 5:00 PM</div>
                    <div>
                        E-mail: <span className={styles.blue}>{settings.contacts.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}