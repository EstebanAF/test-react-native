import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Button, Animated } from 'react-native'

export default function ChampionCard({ champion, onPress, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={styles.header}>
        <Image
          source={{
            uri: `https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${champion.image.full}`
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.infoName}>{champion.name}</Text>
          <Text style={styles.infoTitle}>{champion.title}</Text>
          <Text>difficulty: {champion.info.difficulty}</Text>
        </View>
      </View>
      <Button title="View Details" onPress={onPress} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 10
  },
  info: {
    paddingLeft: 10
  },
  infoName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    maxWidth: 110
  }
})
