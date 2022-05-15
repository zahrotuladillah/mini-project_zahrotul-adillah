import { createSlice } from  '@reduxjs/toolkit'
import { v4 as uidv4 } from "uuid"

const initialValue = dataList

export const ListSlice =  createSlice({
    name : "list",
    initialState : {
        items : initialValue
    },
    reducers : {
        
    }
})

export const {  } = ListSlice.actions
export default ListSlice.reducer
