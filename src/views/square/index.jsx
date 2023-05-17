import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchActivityListAction, fetchSwipperDataAction } from './store'
import TopSwiper from './views/TopSwiper'
import ActivityList from './views/ActivityList'

const Square = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSwipperDataAction())
        dispatch(fetchActivityListAction())
    }, [])
    const { swiper, activityList } = useSelector((state) => ({
        swiper: state.square.swiper,
        activityList: state.square.activityList
    }), shallowEqual)
    return (
        <View style={{ height: '100%' }}>
            <TopSwiper itemData={swiper} />
            <ActivityList itemData={activityList}/>
        </View>
    )
}

export default Square

const styles = StyleSheet.create({
    
})