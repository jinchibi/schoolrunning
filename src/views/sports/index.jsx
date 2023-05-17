

// 导入react native组件
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TotalSportsCard from './views/TotalSportsCard';

// 定义运动管理页面组件
export default class Sport extends Component {
  // 定义构造函数和状态
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          date: '2022-03-07',
          distance: '5.2 km',
          time: '30 min',
          calories: '320 kcal',
        },
        {
          date: '2022-03-06',
          distance: '4.8 km',
          time: '28 min',
          calories: '290 kcal',
        },
        {
          date: '2022-03-05',
          distance: '6.0 km',
          time: '35 min',
          calories: '360 kcal',
        },
      ],
      goal: {
        distance: '10 km',
        time: '60 min',
        calories: '600 kcal',
      },
      advice: {
        title: '如何提高跑步效率？',
        content:
          '跑步效率是指在一定时间内跑完一定距离所消耗的能量，跑步效率越高，意味着能量消耗越少，跑步速度越快。提高跑步效率的方法有以下几种：\n1. 保持正确的姿势，避免摆动过大或弯腰驼背。\n2. 增加步频，缩短接地时间，减少空中时间。\n3. 增强核心肌群，提高身体稳定性和协调性。\n4. 适当进行间歇训练，提高有氧能力和无氧能力。\n5. 合理安排饮食和休息，保持良好的体能状态。',
      },
      totalData: {
        totalMileage: 15.21,
        farthest: 4.55,
        fastest: 5.14
      }
    };
  }

  // 定义渲染方法
  render() {
    return (
      <View style={styles.container}>
        {/* 标题栏 */}
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>运动管理</Text>
        </View>
        {/* 内容区域 */}
        <ScrollView style={styles.content}>
          {/* 运动记录 */}
          <View style={styles.record}>
            <Text style={styles.recordTitle}>运动记录</Text>
            {this.state.records.map((record, index) => (
              <View key={index} style={styles.recordItem}>
                <Text style={styles.recordDate}>{record.date}</Text>
                <Text style={styles.recordDistance}>{record.distance}</Text>
                <Text style={styles.recordTime}>{record.time}</Text>
                <Text style={styles.recordCalories}>{record.calories}</Text>
              </View>
            ))}
          </View>
          {/* 运动目标 */}
          <View style={styles.goal}>
            <Text style={styles.goalTitle}>运动目标</Text>
            <View style={styles.goalItem}>
              <Text style={styles.goalDistance}>{this.state.goal.distance}</Text>
              <Text style={styles.goalTime}>{this.state.goal.time}</Text>
              <Text style={styles.goalCalories}>{this.state.goal.calories}</Text>
            </View>
            {/* 修改目标按钮 */}
            <TouchableOpacity
              style={styles.goalButton}
              onPress={() => this.props.navigation.navigate('Goal')}>
              <Text style={styles.goalButtonText}>修改目标</Text>
            </TouchableOpacity>
          </View>
          {/* 运动建议 */}
          <View style={styles.advice}>
            <Text style={styles.adviceTitle}>运动建议</Text>
            <View style={styles.adviceItem}>
              <Text style={styles.adviceItemTitle}>{this.state.advice.title}</Text>
              <Text style={styles.adviceItemContent}>{this.state.advice.content}</Text>
            </View>
          </View>
          <TotalSportsCard itemData={this.state.totalData} />
        </ScrollView>
      </View>
    );
  }
}

// 定义样式表
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  titleBar: {
    height: 50,
    backgroundColor: '#615f6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    color: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  record: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  recordTitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  recordDate: {
    fontSize: 16,
    color: '#333333',
  },
  recordDistance: {
    fontSize: 16,
    color: '#4e4c59',
  },
  recordTime: {
    fontSize: 16,
    color: '#ff6600',
  },
  recordCalories: {
    fontSize: 16,
    color: '#ff0000',
  },
  goal: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  goalDistance: {
    fontSize: 16,
    color: '#4e4c59',
  },
  goalTime: {
    fontSize: 16,
    color: '#ff6600',
  },
  goalCalories: {
    fontSize: 16,
    color: '#ff0000',
  },
  goalButton: {
    backgroundColor: '#615f6a',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  goalButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  advice: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  adviceTitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  adviceItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  adviceItemTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  adviceItemContent: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});
