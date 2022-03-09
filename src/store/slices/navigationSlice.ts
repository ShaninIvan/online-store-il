import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'

type NavigationStateType = {
    level1: CategoryType[]
    parent1: number | null
    level2: CategoryType[]
    parent2: number | null
    level3: CategoryType[]
    parent3: number | null
    variants: ProductType[]
}

type Level1PayloadType = {
    parent: NavigationStateType['parent1']
    level: NavigationStateType['level1']
}

type Level2PayloadType = {
    parent: NavigationStateType['parent2']
    level: NavigationStateType['level2']
}

type Level3PayloadType = {
    parent: NavigationStateType['parent3']
    level: NavigationStateType['level3']
}

const initialState: NavigationStateType = {
    level1: [],
    parent1: null,
    level2: [],
    parent2: null,
    level3: [],
    parent3: null,
    variants: [],
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: initialState,
    reducers: {
        navResetMenu: () => initialState,
        navSetLevel1: (state, action: PayloadAction<Level1PayloadType>) => {
            state.level1 = action.payload.level
            state.parent1 = action.payload.parent
            state.level2 = []
            state.parent2 = null
            state.level3 = []
            state.parent3 = null
        },
        navSetLevel2: (state, action: PayloadAction<Level2PayloadType>) => {
            state.level2 = action.payload.level
            state.parent2 = action.payload.parent
            state.level3 = []
            state.parent3 = null
        },
        navSetLevel3: (state, action: PayloadAction<Level3PayloadType>) => {
            state.level3 = action.payload.level
            state.parent3 = action.payload.parent
        },
        navSetVariants: (state, action: PayloadAction<NavigationStateType['variants']>) => {
            state.variants = action.payload
        },
    },
})

export const { navResetMenu, navSetLevel1, navSetLevel2, navSetLevel3, navSetVariants } =
    navigationSlice.actions
export const navigationReducer = navigationSlice.reducer
