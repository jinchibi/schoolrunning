// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import store from './src/store';
import { Provider } from 'react-redux';

import AppNavigate from './src/components/AppNavigate';



export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}></View>
      <AppNavigate />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 30,
  },
});
