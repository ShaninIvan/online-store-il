import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CatalogStateType } from 'types/CatalogType'

const initialState: CatalogStateType = {
    actual: {
        category: [],
        price: [],
        color: [],
        brand: [],
        name: '',
        sort: 'position',
        show: 5,
        view: 'grid',
        page: 1,
    },
    potential: {
        category: [],
        price: [],
        color: [],
        brand: [],
        name: '',
        sort: 'position',
        show: 5,
        view: 'grid',
        page: 1,
    },
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {
        setCatalogPotentialParams: (
            state,
            action: PayloadAction<Partial<CatalogStateType['potential']>>
        ) => {
            for (const key in action.payload) {
                if (!state.potential[key]) continue

                const value = action.payload[key]
                if (
                    state.potential[key] &&
                    JSON.stringify(state.potential[key]) !== JSON.stringify(value)
                )
                    state.potential[key] = value
            }
        },
        setCatalogActualParams: (
            state,
            action: PayloadAction<Partial<CatalogStateType['actual']>>
        ) => {
            for (const key in action.payload) {
                if (!state.actual[key]) continue

                const value = action.payload[key]

                if (JSON.stringify(state.actual[key]) !== JSON.stringify(value)) {
                    state.actual[key] = value
                    state.potential[key] = value
                }
            }
        },
    },
})

export const { setCatalogPotentialParams, setCatalogActualParams } = catalogSlice.actions
export const catalogReducer = catalogSlice.reducer
