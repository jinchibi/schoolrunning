import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActivityList, getSwiper } from "../services";

export const fetchSwipperDataAction = createAsyncThunk(
    'swiper',
    async (args, { dispatch, getState }) => {
        const res = await getSwiper()
        dispatch(changeSwiperAction(res.data))
    }
)

export const fetchActivityListAction = createAsyncThunk(
    'activityList',
    async (args, { dispatch }) => {
        const res = []
        for (let i = 1; i <= 7; i++) {
            let response = await getActivityList(i)
            res.push(response.data)
        }
        dispatch(changeActivityListAction(res))
    }
)

const squareSlice = createSlice({
    name: 'square',
    initialState: {
        swiper: [],
        activityList: []
    },
    reducers: {
        changeSwiperAction(state, { payload }) {
            state.swiper = payload
        },
        changeActivityListAction(state, { payload }) {
            state.activityList = payload
        }
    }
})

export const {
    changeSwiperAction,
    changeActivityListAction
} = squareSlice.actions

export default squareSlice.reducer