import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfIcecreams:10
}


const icecreamSlice=createSlice({
    name:'Icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIcecreams--
        },
        restored:(state,action)=>{
            state.numOfIcecreams=state.numOfIcecreams+action.payload
        }
    }
})

export default icecreamSlice.reducer
export const {ordered,restored} = icecreamSlice.actions