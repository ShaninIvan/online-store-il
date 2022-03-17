import ImageSlider from 'components/panels/ImageSlider'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import styles from './PageHome.module.less'
import ScreenChecker from 'components/utils/ScreenChecker'
import { PageHomeNewsMock, PageHomeReviewsMock } from './PageHomeMocks'
import { PageHomeReviews } from './components/Reviews/PageHomeReviews'
import { PageHomeNews } from './components/News/PageHomeNews'
import { PageHomePromoblock } from './components/Promoblock/PageHomePromoblock'
import Brands from 'components/parts/Brands'
import { PageHomeZip } from './components/Zip/PageHomeZip'
import { PageHomeNewest } from './components/Newest/PageHomeNewest'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'

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

const mappingPromo = (promoted: CategoryType[], products: ProductType[]) => {}

export const PageHome: React.FC = () => {
    const { products } = useAppSelector((state) => state.products)
    const { categories, promoted } = useAppSelector((state) => state.categories)

    const newestProducts = products.slice(-20)

    return (
        <div className={styles.pagehome}>
            <div className={styles.banners}>
                <ImageSlider images={banners} />
            </div>

            <PageHomeNewest products={newestProducts} />

            <PageHomeZip />

            <div className={styles.promoted}>
                <PageHomePromoblock category={customCategory} products={products} />
                {promoted.map((promo) => (
                    <PageHomePromoblock key={promo.id} category={promo} products={products} />
                ))}
            </div>

            <div className={styles.brands}>
                <Brands />
            </div>

            <ScreenChecker desktop>
                <PageHomeNews news={PageHomeNewsMock} />
            </ScreenChecker>

            <div className={styles.reviews}>
                <PageHomeReviews reviews={PageHomeReviewsMock} />
            </div>
        </div>
    )
}
