import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'


const TopSwiper = (props) => {
    const { itemData } = props
    return (
        <View style={{ height: 200 }}>
            <Swiper
                showsButtons={false}
                height={200}
                showsPagination={false}
            >
                {
                    itemData && itemData.map(((item, index) => (
                        <View key={item.acid} style={{ position: 'relative' }}>
                            <Image
                                source={{ uri: item && item.cover.original }}
                                style={styles.img}
                            />
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </View>
                    )))
                }
            </Swiper>
        </View>

    )
}

export default TopSwiper

const styles = StyleSheet.create({
    wrapper: {
        height: 300
    },
    img: {
        width: '100%',
        height: 200,
        position: 'relative',
        zIndex: 1,
    },
    titleContainer: {
        zIndex: 100,
        position: 'relative',
        top: -20,
        opacity: .6,
        backgroundColor: '#000'
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    }
})