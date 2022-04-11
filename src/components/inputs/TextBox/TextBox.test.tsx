import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextBox from './'

describe('Элементы', () => {
    it('Всегда есть input и label', () => {
        const { getByTestId } = render(<TextBox name='name' type='text' />)
        expect(getByTestId('input')).toBeInTheDocument()
        expect(getByTestId('label')).toBeInTheDocument()
    })
    it('При label и required появляется span с "*"', () => {
        const { getByTestId } = render(<TextBox name='name' label='test' type='text' required />)
        expect(getByTestId('required')).toHaveTextContent('*')
    })
    it('Без label "*" не появится', () => {
        const { queryByTestId } = render(<TextBox name='name' type='text' required />)
        expect(queryByTestId('required')).not.toBeInTheDocument()
    })
})

describe('Атрибуты', () => {
    it('Placeholder виден', () => {
        const { getByPlaceholderText } = render(
            <TextBox name='name' type='text' placeholder='test' />
        )
        expect(getByPlaceholderText('test')).toBeInTheDocument()
    })
})
