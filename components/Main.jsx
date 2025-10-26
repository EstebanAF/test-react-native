import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { getAllChampionsInfo } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ChampionCard from './ChampionCard'
import { Logo } from './icons/logo'
import { Link } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'

export default function Main() {
  const insets = useSafeAreaInsets()
  const [champions, setChampions] = useState([])

  useEffect(() => {
    getAllChampionsInfo().then((champions) => setChampions(champions))
  }, [])

  return (
    <View style={[styles.container]}>
      <View className="flex-row gap-2">
        <Link asChild href="/about">
          <Pressable className="flex-row items-center gap-2">
            <Entypo name="info-with-circle" size={24} color="" />
            <Text className="text-2xl font-bold">About</Text>
          </Pressable>
        </Link>
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
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  container: {
    backgroundColor: 'white',
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
