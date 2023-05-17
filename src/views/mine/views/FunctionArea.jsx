import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const FunctionArea = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={[{ flexDirection: 'row' }, styles.cardWord]}>
                    <Text style={{ fontSize: 17 }}>个人中心</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <View style={styles.cardList}>
                    {/* 运动管理 */}
                    <TouchableOpacity
                        style={styles.functionItem}
                    >
                        <Entypo name="direction" size={24} color="black" />
                        <Text style={styles.functionText}>运动管理</Text>
                    </TouchableOpacity>
                    {/* 设置 */}
                    <TouchableOpacity
                        style={styles.functionItem}
                    >
                        <Feather name="settings" size={24} color="black" />
                        <Text style={styles.functionText}>设置</Text>
                    </TouchableOpacity>
                    {/* 个人主页 */}
                    <TouchableOpacity
                        style={styles.functionItem}
                    >
                        <AntDesign name="home" size={24} color="black" />
                        <Text style={styles.functionText}>个人主页</Text>
                    </TouchableOpacity>
                    {/* 资料编辑 */}
                    <TouchableOpacity
                        style={styles.functionItem}
                    >
                        <AntDesign name="edit" size={24} color="black" />
                        <Text style={styles.functionText}>资料编辑</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default FunctionArea

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
    },
    card: {
        margin: 15,
        backgroundColor: '#ffffff',
        height: 130,
        elevation: 10,
        borderRadius: 10,
    },
    cardWord: {
        margin: 20,
        zIndex: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardList: {
        flexDirection: 'row',
        marginTop: -5
    },
    functionItem: {
        width: '25%',
        // height: 100,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    functionText: {
        fontSize: 15,
        color: '#333333',
        marginTop: 2,
    },
})