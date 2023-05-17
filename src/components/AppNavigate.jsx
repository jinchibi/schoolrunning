import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Mine from '@src/views/mine/index'
import Sports from '@src/views/sports/index'
import Map from '@src/views/map/index'
import Square from '@src/views/square';


const AppNavigate = () => {
    const Tab = createBottomTabNavigator();
    const theme_color = '#f0f0f0'
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'mine') {
                            return (
                                <Ionicons name="person" size={size} color={color} />
                            );
                        } else if (route.name === 'square') {
                            return (
                                <Feather name="activity" size={size} color={color} />);
                        } else if (route.name === 'map') {
                            return (
                                <Entypo name="map" size={size} color={color} />
                            )
                        } else {
                            return (
                                <MaterialIcons name="directions-run" size={size} color={color} />
                            )
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                    tabBarStyle: {
                        backgroundColor: theme_color
                    },
                    headerStyle: { backgroundColor: theme_color },
                    headerShown: false
                })}
            >
                <Tab.Screen
                    name='map'
                    component={Map}
                    options={{ title: '地图' }}
                />
                <Tab.Screen
                    name='square'
                    component={Square}
                    options={{ title: '广场' }}
                />
                <Tab.Screen
                    name='Sports'
                    component={Sports}
                    options={{ title: '运动管理' }}
                />
                <Tab.Screen
                    name='mine'
                    component={Mine}
                    options={{ title: '我的' }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
})