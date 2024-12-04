import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
]

const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action) => {
            const { id } = action.payload
            const counter = state.find(counter => counter.id === id)
            if (counter) {
                counter.value++
            }
        },  
        decrement: (state, action) => {
            const { id } = action.payload
            const counter = state.find(counter => counter.id === id)
            if (counter) {
                counter.value--
            }
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;