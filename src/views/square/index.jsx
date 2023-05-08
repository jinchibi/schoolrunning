import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchSwipperDataAction } from './store'
import TopSwiper from './views/TopSwiper'

const Square = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSwipperDataAction())
    }, [])
    const { swiper } = useSelector((state) => ({
        swiper: state.square.swiper
    }), shallowEqual)
    return (
        <View style={{ height: '100%' }}>
            <TopSwiper itemData={swiper} />

        </View>
    )
}

export default Square

const styles = StyleSheet.create({
    
})