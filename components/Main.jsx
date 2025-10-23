import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { getAllChampionsInfo } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ChampionCard from './ChampionCard'
import { Logo } from './icons/logo'
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
      <View
        style={[
          styles.title,
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }
        ]}>
        <Logo style={styles.logo} />
        <Text className="text-3xl font-bold text-red-500">
          champions {Constants.deviceName.split(' ')[0]}
        </Text>
      </View>

      <FlatList
        data={champions}
        renderItem={({ item }) => <ChampionCard champion={item} onPress={() => alert(item.name)} />}
        keyExtractor={(item) => item.name}
        style={{ width: '100%', height: '100%' }}
      />
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
