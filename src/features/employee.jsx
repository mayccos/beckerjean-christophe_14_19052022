import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: [],
}

// Slice
const { actions, reducer } = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        createEmployee: (draft, action) => {
            draft.employees.push(action.payload)
            return
        },
    },
})

export const createEmployee = actions.createEmployee

export default reducer
