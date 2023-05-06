import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Recommend = ({ navigation }) => {
  return (
    <View>
      <Text>Recommend</Text>
      <Button title='To Mine' onPress={() => navigation.push('mine')} />
    </View>
  )
}

export default Recommend

const styles = StyleSheet.create({})