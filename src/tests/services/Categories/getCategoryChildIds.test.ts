import getCategoryChildIds from 'services/Categories/getCategoryChildIds'
import testCategoriesData from './testCategoriesData'

const categories = testCategoriesData

describe('функция getCategoryChildIds', () => {
    test('Массив Id для категории ID=1 корректен', () => {
        expect(getCategoryChildIds(1, categories)).toEqual(
            expect.arrayContaining([36, 35, 34, 38, 39, 37, 8, 10, 44, 43, 42, 41, 11, 40, 9, 1])
        )
    })
    test('Несуществующая категория возвращает пустой массив', () => {
        expect(getCategoryChildIds(-1, categories)).toEqual([])
    })
    test('Конечная категория возвращает массив со своим id', () => {
        expect(getCategoryChildIds(44, categories)).toEqual([44])
    })
})
