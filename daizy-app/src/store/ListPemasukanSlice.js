import { createSlice } from  '@reduxjs/toolkit'
import { v4 as uidv4 } from "uuid"

export const ListPemasukanSlice =  createSlice({
    name : "listPemasukan",
    initialState : {
        pemasukan : [{}]
    },
    reducers : {
        deletePemasukan : (state, action) => {
            state.pemasukan = state.pemasukan.filter((item) => {return item.id !== action.payload})
        },
        addPemasukan : (state, action) => {
            const newItem = {id : uidv4(), ...action.payload}
            state.pemasukan = [...state.pemasukan, newItem]
        },
        
    }
})

export const { deletePemasukan, addPemasukan } = ListPemasukanSlice.actions
export default ListPemasukanSlice.reducer
