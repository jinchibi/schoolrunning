import { WebView } from 'react-native-webview';
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from 'expo-asset';
import { useState } from 'react';

/*
    传入一个require后的路径，使用变量require会报错
*/
export default function support_html(path) {
    const [index, setIndex] = useAssets(path)
    const [html, setHtml] = useState("")
    if (index) {
        readAsStringAsync(index[0].localUri).then((data) => {
            setHtml(data);
        });
    }
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html }}
        />
    )
}