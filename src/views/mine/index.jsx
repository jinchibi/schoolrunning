
// 导入react native组件
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TopUserInfo from './views/TopUserInfo';
import FunctionArea from './views/FunctionArea';


// 定义user页面组件
const User = () => {
  const userInfo = {
    username: '张三',
    userImage: require('./assets/user.jpg'),
    level: '初级跑者',
    title: '新手上路',
    userBackground: require('./assets/background.jpg'),
    medals: [
      require('./assets/medals/a.png'),
      require('./assets/medals/b.png'),
      require('./assets/medals/c.png'),
    ],
  }

  return (
    <View style={styles.container}>
      <TopUserInfo userInfo={userInfo} />
      {/* 功能区域 */}
      <FunctionArea />
    </View>
  );
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});