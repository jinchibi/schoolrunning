import { configureStore } from "@reduxjs/toolkit";
import recommendSlice from "./modules/recommend";

const store = configureStore({
    reducer: {
        recommend: recommendSlice
    }
})

export default store