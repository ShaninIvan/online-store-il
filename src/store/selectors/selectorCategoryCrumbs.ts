import { createSelector } from '@reduxjs/toolkit'
import getPath from 'core/routing/getPath'
import { RootState } from 'store/store'
import { CategoryType } from 'types/CategoryType'

const selectCategories = (state: RootState) => state.categories.categories
const selectCategory = (_: any, category: CategoryType) => category

export const selectorCategoryCrumbs = createSelector(
    [selectCategories, selectCategory],
    (categories, category) => {
        const homeRoute = {
            name: 'Home',
            path: getPath('/'),
        }

        const endRoute = {
            name: category.name,
            path: getPath('/catalog/:id', { id: category.id }),
        }

        const crumbs = [endRoute]

        const getParent = (category: CategoryType) => {
            if (!category.parent) return

            const parent = categories.find((item) => item.id === category.parent?.id)

            if (parent) {
                const crumb = {
                    name: parent.name,
                    path: getPath('/catalog/:id', { id: parent.id }),
                }

                crumbs.unshift(crumb)
                getParent(parent)
            }
        }

        getParent(category)

        crumbs.unshift(homeRoute)

        return crumbs
    }
)
