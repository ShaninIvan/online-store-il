import getPath from 'core/routing/getPath'
import { CategoryType } from 'types/CategoryType'

const getRouteLineByCategory = (category: CategoryType, categories: CategoryType[]) => {
    const homeRoute = {
        name: 'Home',
        path: getPath('/'),
    }

    const endRoute = {
        name: category.name,
        path: getPath('/catalog/:id', { id: category.id }),
    }

    const routeLine = [endRoute]

    const getParent = (category: CategoryType) => {
        if (!category.parent) return

        const parent = categories.find((item) => item.id === category.parent?.id)

        if (parent) {
            const route = {
                name: parent.name,
                path: getPath('/catalog/:id', { id: parent.id }),
            }

            routeLine.unshift(route)
            getParent(parent)
        }
    }

    getParent(category)

    routeLine.unshift(homeRoute)

    return routeLine
}

export default getRouteLineByCategory
