import { createSlice } from  '@reduxjs/toolkit'
import { v4 as uidv4 } from "uuid"

export const ListPengeluaranSlice =  createSlice({
    name : "listPengeluaran",
    initialState : {
        pengeluaran : [{id: 0, nama: "keluaran", nominal: 90000, tanggal:"90/09/8800", keterangan: "ppp"}]
    },
    reducers : {
        deletePengeluaran : (state, action) => {
            state.pengeluaran = state.pengeluaran.filter((item) => {return item.id !== action.payload})
        },
        addPengeluaran : (state, action) => {
            const newItem = {id : uidv4(), ...action.payload}
            state.pengeluaran = [...state.pengeluaran, newItem]
        },

        
    }
})

export const { deletePengeluaran, addPengeluaran } = ListPengeluaranSlice.actions
export default ListPengeluaranSlice.reducer
