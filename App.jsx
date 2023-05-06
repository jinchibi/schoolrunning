import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './src/store';
import { Provider } from 'react-redux';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Recommend from './src/views/recommend/index'
import Mine from './src/views/mine/index'
import Weather from './src/views/weather/index'
import Map from './src/views/map/index'
import support_html from './src/utils/support_html';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // const path = require('./a.html')
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'mine') {
                return (
                  <Ionicons name="person" size={size} color={color} />
                );
              } else if (route.name === 'recommend') {
                return (
                  <MaterialIcons name="recommend" size={size} color={color} />
                );
              } else if (route.name === 'map') {
                return (
                  <Entypo name="map" size={size} color={color} />
                )
              } else {
                return (
                  <MaterialCommunityIcons name="weather-cloudy" size={size} color={color} />
                )
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            tabBarStyle: {
              backgroundColor: 'yellowgreen'
            },
            headerStyle: { backgroundColor: 'yellowgreen' }
          })}
        >
          <Tab.Screen
            name='recommend'
            component={Recommend}
            options={{ title: '推荐' }}
          />
          <Tab.Screen
            name='weather'
            component={Weather}
            options={{ title: '天气' }}
          />
          <Tab.Screen
            name='mine'
            component={Mine}
            options={{ title: '我的' }}
          />
          <Tab.Screen
            name='map'
            component={Map}
            options={{ title: '地图' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
