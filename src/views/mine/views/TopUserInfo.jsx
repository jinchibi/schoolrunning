import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const TopUserInfo = ({userInfo}) => {
    return (
        <ImageBackground 
            source={userInfo.userBackground}  
            style={[styles.container]}
            imageStyle={{ opacity: 0.79}}
            resizeMode='cover'
        >
            <Image style={styles.avatar} source={userInfo.userImage} />
            <Text style={styles.username}>{userInfo.username}</Text>
            <Text style={styles.levelAndTitle}>
                {userInfo.level} | {userInfo.title}
            </Text>
            {/* 勋章墙 */}
            <View style={styles.medalWall}>
                {userInfo.medals.map((medal, index) => (
                    <Image key={index} style={styles.medal} source={medal} />
                ))}
            </View>
        </ImageBackground>
    )
}

export default TopUserInfo

const styles = StyleSheet.create({
    container: {
        height: 270,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    username: {
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
    },
    levelAndTitle: {
        fontSize: 16,
        color: '#ffffff',
        marginTop: 5,
    },
    medalWall: {
        flexDirection: 'row',
        marginTop: 10,
    },
    medal: {
        width: 40,
        height: 40,
        marginHorizontal: 5,
    },
})