import { View, Text, Pressable } from 'react-native'
import { Slot, Stack } from 'expo-router'
import '../assets/global.css'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '../components/icons/logo'
import Constants from 'expo-constants'
import { Link } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'

export default function Layout() {
  const insets = useSafeAreaInsets()

  return (
    <View className="w-full h-full">
      <Stack
        className="w-full "
        screenOptions={{
          headerLeft: () => <Logo className="w-10 h-10" />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable className="flex-row items-center gap-2 p-2">
                <Entypo name="info-with-circle" size={24} color="" />
              </Pressable>
            </Link>
          )
        }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="[id]" options={{ title: 'Champion Details' }} />
      </Stack>
    </View>
  )
}
