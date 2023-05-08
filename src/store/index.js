import { configureStore } from "@reduxjs/toolkit";
import recommendSlice from "./modules/recommend";
import squareSlice from '../views/square/store/index'

const store = configureStore({
    reducer: {
        recommend: recommendSlice,
        square: squareSlice
    }
})

export default store