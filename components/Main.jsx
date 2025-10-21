import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { getAllChampionsInfo } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ChampionCard from './ChampionCard'

export default function Main() {
  const insets = useSafeAreaInsets()
  const [champions, setChampions] = useState([])

  useEffect(() => {
    getAllChampionsInfo().then((champions) => setChampions(champions))
  }, [])

  return (
    <View
      style={[
        styles.container,
        { marginTop: insets.top === 0 ? 50 : insets.top, marginBottom: insets.bottom }
      ]}>
      <Text style={styles.title}>LOL champions {Constants.deviceName}</Text>
      <ScrollView style={{ height: '100%', width: '100%' }}>
        {champions.length === 0 ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          champions.map((champion) => (
            <ChampionCard
              key={champion.name}
              champion={champion}
              onPress={() => alert(champion.name)}
            />
          ))
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffeeee',
    width: '100%',
    height: '100%'
  },
  container: {
    backgroundColor: '#ffeeee',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: 20
  },
  info: {}
})
