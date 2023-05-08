import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSwiper } from "../services";

export const fetchSwipperDataAction = createAsyncThunk(
    'swiper',
    async (args, { dispatch, getState }) => {
        const res = await getSwiper()
        dispatch(changeSwiperAction(res.data))
    }
)

const squareSlice = createSlice({
    name: 'square',
    initialState: {
        swiper: []
    },
    reducers: {
        changeSwiperAction(state, { payload }) {
            state.swiper = payload
        }
    }
})

export const {
    changeSwiperAction
} = squareSlice.actions

export default squareSlice.reducer