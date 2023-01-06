
import {combineReducers} from "@reduxjs/toolkit"
import cartReducer from './cart/cartSlice'
import productReducer from './menu/productsSlice'
import addressReducer from "./userInfo/addressSlice"

const rootReducer =  combineReducers(
    {cart: cartReducer,
            products: productReducer,
            endereco: addressReducer,

    }
)

export default rootReducer