import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    endereco: {},

}

export const addressSlice = createSlice({
    name: 'endereco',
    initialState,
    reducers: {
        setEndereco: (state, action) => {
            return {endereco: action.payload}
        },
        clearEndereco: (state) => {
            return {endereco: {}}
        }
    }
})

export const getAddress = state => state.endereco.endereco

export const {setEndereco, clearEndereco} = addressSlice.actions

export default addressSlice.reducer 

