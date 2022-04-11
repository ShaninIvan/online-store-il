import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Общее', () => {
    test('Это кнопка', () => {
        render(<Button preset='blue-white'>test</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    test('Текст кнопки виден', () => {
        render(<Button preset='blue-white'>test</Button>)
        expect(screen.getByText(/test/)).toBeInTheDocument()
    })
})

describe('Проп paypal', () => {
    test('При свойстве paypal = true добавляется картинка', () => {
        render(
            <Button preset='blue-white' paypal>
                test
            </Button>
        )
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
    test('При свойстве paypal = false картинки нет', () => {
        render(<Button preset='blue-white'>test</Button>)
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })
})
