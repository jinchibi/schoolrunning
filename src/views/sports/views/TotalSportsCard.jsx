import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TotalSportsCard = ({ itemData }) => {
    const totalData = {
        totalMileage: 15.21,
        farthest: 4.55,
        fastest: 5.14
    }
    const time = itemData.fastest.toString().split('.')
    return (
        <View style={styles.cardContainer}>
            <View style={[styles.semicircle, styles.left]}></View>
            <View style={[styles.semicircle, styles.right]}></View>
            <View>
                <View style={styles.sportItem}>
                    <Text style={styles.word}>总里程</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.number}>{itemData.totalMileage}</Text>
                        <Text style={styles.littleWord}>km</Text>
                    </View>

                </View>
                <View style={styles.sportItem}>
                    <Text style={styles.word}>单次最远</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.number}>{itemData.farthest}</Text>
                        <Text style={styles.littleWord}>km</Text>
                    </View>
                </View>
            </View>
            <MaterialCommunityIcons style={{ margin: 'auto' }} name="lightning-bolt" size={100} color="#474651" />
            <View style={styles.sportItem}>
                <Text style={styles.word}>最快配速</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.number}>{time[0]}</Text>
        
                    <Text style={{ color: '#f9f9fb' }}>'</Text>
                    <Text style={styles.number}>{time[1]}</Text>
                    <Text style={{ color: '#f9f9fb' }}>''</Text>
                </View>
            </View>
        </View>
    )
}

export default TotalSportsCard

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        height: 180,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#4e4c59',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    semicircle: {
        height: 30,
        width: 30,
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
    },
    left: {
        position: 'absolute',
        top: 75,
        left: -15,
    },
    right: {
        position: 'absolute',
        top: 75,
        right: -15,
    },
    sportItem: {
        margin: 30,
        marginBottom: 15,
        marginTop: 15,
    },
    word: {
        fontSize: 15,
        color: '#8b8996'
    },
    number: {
        fontSize: 20,
        color: '#f9f9fb'
    },
    littleWord: {
        marginTop: 7,
        fontSize: 13,
        color: '#f9f9fb'
    }
})