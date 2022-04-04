import getCardcroppedDesc from 'services/Cards/getCardcroppedDesc'

const smallString = 'libero nunc consequat interdum varius'

const largeString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Aliquam etiam erat velit scelerisque in dictum non consectetur a.
   Risus in hendrerit gravida rutrum quisque non tellus orci ac.
    Et ultrices neque ornare aenean euismod elementum nisi. Risus sed vulputate odio ut enim blandit volutpat.`

describe('Функция getCardcroppedDesc', () => {
    test('Строка меньше 55 символов не изменилась', () => {
        expect(getCardcroppedDesc(smallString)).toBe(smallString)
    })
    test('Большая строка обрезана до 58 символов', () => {
        expect(getCardcroppedDesc(largeString)).toHaveLength(58)
    })
    test('Обрезанная строка содержит многоточие', () => {
        expect(getCardcroppedDesc(largeString)).toMatch(/\.{3,}/)
    })
})
