import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from 'expo-asset';
import { useState } from 'react';

export default function App() {
  const a = require('./a.html')
  const [index, setb] = useAssets(a)
  const [html, setHtml] = useState("")
  if (index) {
    readAsStringAsync(index[0].localUri).then((data) => {
        setHtml(data);
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        originWhitelist={['*']}
        source={{html}}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
