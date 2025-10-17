import { createSlice } from "@reduxjs/toolkit";

const AppState = {
    loading:false
}

export const AppSlice = createSlice({
    name:"App",
    initialState:AppState,
    reducers:{},
    extraReducers:(build)=>{}
})

export const {} = AppSlice.actions
export default AppSlice.reducer