import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import support_html from '@src/utils/support_html';

const Map = () => {
  return (
    <View style={{flex: 1}}>
      {
        support_html(require('./a.html'))
      }
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})