import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { getAllChampionsInfo } from './lib/metacritic'
import Main from './components/Main'

export default function App() {
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffeeee',
    width: '100%',
    height: '100%'
  }
})
