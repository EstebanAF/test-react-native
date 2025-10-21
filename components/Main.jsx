import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { getAllChampionsInfo } from '../lib/metacritic'
import Constants from 'expo-constants'

export default function Main() {
  const [champions, setChampions] = useState([])

  useEffect(() => {
    getAllChampionsInfo().then((champions) => setChampions(champions))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOL champions {Constants.deviceName}</Text>
      <ScrollView style={{ height: '100%', width: '100%' }}>
        {champions.map((champ) => (
          <View key={champ.name} style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start'
              }}>
              <Image
                source={{
                  uri: `https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${champ.image.full}`
                }}
                style={styles.image}
              />
              <View style={styles.info}>
                <Text style={styles.info.name}>{champ.name}</Text>
                <Text style={styles.info.title}>{champ.title}</Text>
                <Text>difficulty: {champ.info.difficulty}</Text>
              </View>
            </View>
            <Button title="View Details" onPress={() => alert(champ.name)} />
          </View>
        ))}
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
    marginRight: 'auto',
    marginTop: Constants.statusBarHeight === 0 ? 50 : Constants.statusBarHeight
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: 20
  },
  card: {
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  info: {
    paddingLeft: 10,
    name: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    title: {
      fontSize: 16,
      fontWeight: 'normal',
      maxWidth: 110
    }
  }
})
