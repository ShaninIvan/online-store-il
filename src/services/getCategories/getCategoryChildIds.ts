import { CategoryType } from 'types/CategoryType'

const getCategoryChildIds = (mainId: number, categories: CategoryType[]) => {
    const fullIdList: number[] = []

    const pushIds = (id: number) => {
        const currentCategory = categories.find((category) => category.id === id)

        if (!currentCategory) return

        if (currentCategory.subcategories.length > 0) {
            currentCategory.subcategories.forEach((sub) => pushIds(sub.id))
        }
        fullIdList.push(currentCategory.id)
    }

    pushIds(mainId)

    return fullIdList
}

export default getCategoryChildIds
