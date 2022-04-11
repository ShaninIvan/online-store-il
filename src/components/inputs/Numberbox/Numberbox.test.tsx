import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Numberbox from './'

describe('Общее', () => {
    it('У компонента есть value, increment и decrement', () => {
        const change = jest.fn()
        render(<Numberbox value={0} min={0} max={10} onChange={change} />)
        expect(screen.getByTestId('value')).toBeInTheDocument()
        expect(screen.getByTestId('increment')).toBeInTheDocument()
        expect(screen.getByTestId('decrement')).toBeInTheDocument()
    })
    it('Компонент выводит value', () => {
        const change = jest.fn()
        render(<Numberbox value={0} min={0} max={10} onChange={change} />)
        expect(screen.getByTestId('value')).toHaveTextContent('0')
    })
})

describe('Действия', () => {
    it('increment передает 6 один раз', async () => {
        const change = jest.fn((value) => value)
        render(<Numberbox value={5} min={0} max={10} onChange={change} />)
        await userEvent.click(screen.getByTestId('increment'))
        expect(change).toHaveBeenCalledTimes(1)
        expect(change).toHaveBeenCalledWith(6)
    })

    it('decrement передает 4 один раз', async () => {
        const change = jest.fn((value) => value)
        render(<Numberbox value={5} min={0} max={10} onChange={change} />)
        await userEvent.click(screen.getByTestId('decrement'))
        expect(change).toHaveBeenCalledTimes(1)
        expect(change).toHaveBeenCalledWith(4)
    })
})

describe('Min и Max', () => {
    it('При value >= max increment не вызывается', async () => {
        const change = jest.fn((value) => value)
        render(<Numberbox value={1} min={0} max={1} onChange={change} />)
        await userEvent.click(screen.getByTestId('increment'))
        expect(change).toHaveBeenCalledTimes(0)
    })
    it('При value <= min decrement не вызывается', async () => {
        const change = jest.fn((value) => value)
        render(<Numberbox value={0} min={0} max={1} onChange={change} />)
        await userEvent.click(screen.getByTestId('decrement'))
        expect(change).toHaveBeenCalledTimes(0)
    })
})
