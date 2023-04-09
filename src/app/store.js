import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/Icecream/icecreamSlice'


export const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer
    }
})