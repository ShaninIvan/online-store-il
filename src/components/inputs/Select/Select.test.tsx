import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from './'

const options = [
    { value: 5, name: '5 per page' },
    { value: 10, name: '10 per page' },
]

describe('Общее', () => {
    it('Компонент рендерит список согласно массиву options', () => {
        const change = jest.fn()
        render(<Select options={options} callback={change} />)
        expect(screen.getAllByText(/5 per page/)).toHaveLength(2)
        expect(screen.getAllByText(/10 per page/)).toHaveLength(1)
    })
})

describe('Действия', () => {
    it('Выбор пункта передает его value', async () => {
        const change = jest.fn((value) => value)
        render(<Select options={options} callback={change} />)
        await userEvent.click(screen.getByText(/10 per page/))
        expect(change).toBeCalledTimes(1)
        expect(change).toBeCalledWith(10)
    })
})
