import getPath from 'core/routing/getPath'
import { CategoryType } from 'types/CategoryType'

const getBreadcrumbsByCategory = (category: CategoryType, categories: CategoryType[]) => {
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
            const route = {
                name: parent.name,
                path: getPath('/catalog/:id', { id: parent.id }),
            }

            crumbs.unshift(route)
            getParent(parent)
        }
    }

    getParent(category)

    crumbs.unshift(homeRoute)

    return crumbs
}

export default getBreadcrumbsByCategory
