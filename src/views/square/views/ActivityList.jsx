import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';


const ActivityList = (props) => {
    const { itemData } = props
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.top}>
                <View style={styles.line}></View>
                <Text style={styles.word}>活动广场</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.info}>
                <Text style={{ marginLeft: 30 }}>活动列表</Text>
                <View style={[styles.more]}>
                    <Text style={{ color: 'gray' }}>更多</Text>
                    <AntDesign name="right" size={17} color="gray" />
                </View>
            </View>
            <ScrollView>
                {
                    itemData.map((item) => {
                        return (
                            <View style={styles.listContainer} key={item.acid}>
                                <Image 
                                    style={styles.listImg} 
                                    source={{ uri: item.cover.thumbnail }} 
                                />
                                <View style={{flex: 1}}>
                                    <Text style={styles.listTitle}>{item.title}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ActivityList

const styles = StyleSheet.create({
    top: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        height: 30
    },
    line: {
        width: 115,
        height: 2,
        backgroundColor: '#615f6a',
        marginTop: 9,
        margin: 25
    },
    word: {
        color: '#615f6a'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    more: {
        flexDirection: 'row',
        marginRight: 30
    },
    listContainer: {
        borderWidth: 1,
        borderColor: '#e3e3d96e',
        marginLeft: 30,
        marginTop: 30,
        marginRight: 30,
        flexDirection: 'row',
        height: 90,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listImg: {
        width: 100,
        height: 60,
        margin: 10
    },
    listTitle: {
        marginLeft: 10
    }
})