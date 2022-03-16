import CardSlider from 'components/panels/CardSlider'
import ImageSlider from 'components/panels/ImageSlider'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageHome.module.less'
import ZipImg from 'assets/zip.png'
import { ProductType } from 'types/ProductType'
import { CategoryType } from 'types/CategoryType'
import Page from 'components/panels/Page'

const banners = [
    {
        url: 'https://i.onthe.io/smngoz5vanqtp2d6g.901fc1ac.png',
        alt: 'HP Printers',
    },

    {
        url: 'https://i.onthe.io/smngoz24jc7hg1j32g.5d67851e.jpg',
        alt: 'MSi Monitor',
    },
    {
        url: 'https://i.onthe.io/smngozvunmptbdp08.52973ec0.jpg',
        alt: 'Gigabyte',
    },
]

const customCategory = {
    id: 'ourdeals',
    name: 'Custom Builds',
    parent: null,
    subcategories: [],
    image: [
        {
            imageUrl: 'https://i.onthe.io/smngoz8la3gb0mv0g.962d80df.jpg',
            imageAlt: 'Custom Builds',
        },
    ],
}

export const PageHome: React.FC = () => {
    const { products } = useAppSelector((state) => state.products)
    const { categories, promoted } = useAppSelector((state) => state.categories)
    const { brands } = useAppSelector((state) => state.brands)

    const newProducts = products.slice(-20)

    return (
        <Page>
            <div className={styles.pagehome}>
                <div className={styles.banners}>
                    <ImageSlider images={banners} />
                </div>

                <div className={styles.new}>
                    <h2>New Products</h2>
                    <Link to={getPath(Paths.home)}>See All New Products</Link>
                    <div className={styles.new__cards}>
                        <CardSlider products={newProducts} withControls />
                    </div>
                </div>

                <div className={styles.zip}>
                    <img src={ZipImg} alt='zip' /> <span className={styles.zip__vl}></span>
                    <span>
                        <b>own</b>&nbsp; it now, up to 6 months interest free&nbsp;
                    </span>
                    <Link to={getPath(Paths.terms)}>learn more</Link>
                </div>

                <div className={styles.promoted}>
                    <PromoBlock category={customCategory} products={products} />
                    {promoted.map((promo) => {
                        return <PromoBlock key={promo.id} category={promo} products={products} />
                    })}
                </div>

                <div className={styles.brands}>
                    {brands.map((brand) => (
                        <div key={brand.id} className={styles.brands__img}>
                            <img src={brand.image.imageUrl} alt={brand.image.imageAlt} />
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    )
}

type PromoPropsType = {
    category: Omit<CategoryType, 'id'> & { id: string | number }
    products: ProductType[]
}

export const PromoBlock: React.FC<PromoPropsType> = ({ category, products }) => {
    const visibleProducts = products.slice(0, 5)

    if (category.image.length === 0) return <></>

    return (
        <div className={styles.promoblock}>
            <div className={styles.promoblock__category}>
                <img src={category.image[0].imageUrl} alt={category.image[0].imageAlt} />
                <div className={styles.promoblock__name}>{category.name}</div>
                <Link to={getPath(Paths.catalog, { id: category.id })}>See All Products</Link>
            </div>
            <div className={styles.promoblock__cards}>
                <CardSlider products={visibleProducts} />
            </div>
        </div>
    )
}
