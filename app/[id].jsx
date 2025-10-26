import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Fontisto from '@expo/vector-icons/Fontisto'
import { Link } from 'expo-router'
import { getChampionInfo } from '../lib/metacritic'

export default function ChampionDetails() {
  const { id } = useLocalSearchParams()
  const champion = getChampionInfo(id)

  // Use effect to load champion info asynchronously, rendering all info per @file_context_0

  return <ChampionDetailsContent id={id} />

  function ChampionDetailsContent({ id }) {
    const [champion, setChampion] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      setLoading(true)
      setError(null)
      getChampionInfo(id)
        .then((data) => {
          setChampion(data)
          setLoading(false)
        })
        .catch((err) => {
          setError('Failed to load champion info')
          setLoading(false)
        })
    }, [id])

    if (loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    if (error || !champion) {
      return (
        <View>
          <Text>Error: {error || 'Champion not found'}</Text>
        </View>
      )
    }

    return (
      <View className="p-5">
        {/* Home link */}
        <Link asChild href="/" className="mb-5 justify-center items-center">
          <Pressable className="mb-3">
            <Fontisto name="home" size={24} color="blue" />
          </Pressable>
        </Link>

        {/* Bio-style profile */}
        <View
          className="bg-white rounded-xl shadow-md items-center p-6"
          style={{
            borderColor: '#d1d5db',
            borderWidth: 1
          }}>
          <ScrollView className="w-full">
            {/* Display Champion Image */}
            {champion.image && champion.image.full && (
              <Image
                source={{
                  uri: `https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${champion.image.full}`
                }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  marginBottom: 16,
                  borderWidth: 2,
                  borderColor: '#4b5563'
                }}
              />
            )}

            {/* Name and Title */}
            <Text className="text-3xl font-extrabold text-gray-900 mb-2">{champion.name}</Text>
            <Text className="text-lg italic text-gray-600 mb-4">{champion.title}</Text>

            {/* One-line tags */}
            <Text className="mb-2 text-gray-700">
              <Text className="font-semibold">Tags:</Text>{' '}
              {champion.tags && champion.tags.join(', ')}
            </Text>
            {champion.partype ? (
              <Text className="mb-2 text-gray-700">
                <Text className="font-semibold">Resource:</Text> {champion.partype}
              </Text>
            ) : null}

            {/* Differently styled Short Description */}
            <Text
              className="mb-4 text-base leading-relaxed text-center text-gray-800"
              style={{ fontStyle: 'italic' }}>
              {champion.blurb}
            </Text>

            {/* Stats - little "Profile Card" approach */}
            <View
              className="w-full rounded-lg bg-gray-100 p-4 mb-2"
              style={{
                borderColor: '#e5e7eb',
                borderWidth: 1
              }}>
              <Text className="font-bold mb-2 text-gray-800 text-center tracking-wide">
                Attributes & Stats
              </Text>
              <View className="flex-row flex-wrap justify-between">
                <View className="w-1/2 mb-1">
                  <Text>
                    <Text className="font-semibold">Attack:</Text> {champion.info.attack}
                  </Text>
                </View>
                <View className="w-1/2 mb-1">
                  <Text>
                    <Text className="font-semibold">Defense:</Text> {champion.info.defense}
                  </Text>
                </View>
                <View className="w-1/2 mb-1">
                  <Text>
                    <Text className="font-semibold">Magic:</Text> {champion.info.magic}
                  </Text>
                </View>
                <View className="w-1/2 mb-1">
                  <Text>
                    <Text className="font-semibold">Difficulty:</Text> {champion.info.difficulty}
                  </Text>
                </View>
              </View>
            </View>

            {/* Extended Stats */}
            <View className="w-full mt-2 p-3 rounded-md bg-gray-50 border border-gray-200">
              <Text className="font-bold mb-1 text-sm text-gray-700">Detailed Stats</Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">HP:</Text> {champion.stats.hp} (+
                {champion.stats.hpperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">MP:</Text> {champion.stats.mp} (+
                {champion.stats.mpperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Move Speed:</Text> {champion.stats.movespeed}
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Armor:</Text> {champion.stats.armor} (+
                {champion.stats.armorperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Spell Block:</Text> {champion.stats.spellblock} (+
                {champion.stats.spellblockperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Attack Range:</Text> {champion.stats.attackrange}
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">HP Regen:</Text> {champion.stats.hpregen} (+
                {champion.stats.hpregenperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">MP Regen:</Text> {champion.stats.mpregen} (+
                {champion.stats.mpregenperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Crit:</Text> {champion.stats.crit} (+
                {champion.stats.critperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Attack Damage:</Text> {champion.stats.attackdamage}{' '}
                (+
                {champion.stats.attackdamageperlevel}/level)
              </Text>
              <Text className="text-xs mb-0.5">
                <Text className="font-semibold">Attack Speed:</Text> {champion.stats.attackspeed} (+
                {champion.stats.attackspeedperlevel}%/level)
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
