import { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { getAllChampionsInfo } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChampionCard from './ChampionCard'
import Screen from './Screen'

export default function Main() {
  const insets = useSafeAreaInsets()
  const [champions, setChampions] = useState([])

  useEffect(() => {
    getAllChampionsInfo().then((champions) => setChampions(champions))
  }, [])

  return (
    <Screen>
      <FlatList
        data={champions}
        renderItem={({ item }) => <ChampionCard champion={item} onPress={() => alert(item.name)} />}
        keyExtractor={(item) => item.name}
        className="w-full h-full p-8"
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
    fill: '#c28f2b'
  }
})
