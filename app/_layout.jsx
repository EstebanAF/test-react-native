import { View, Text, Pressable } from 'react-native'
import { Slot, Stack } from 'expo-router'
import '../assets/global.css'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '../components/icons/logo'
import { Link } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'

export default function Layout() {
  const insets = useSafeAreaInsets()

  return (
    <View className="w-full h-full">
      <Stack
        className="w-full "
        screenOptions={{
          title: 'League of Legends',
          headerLeft: () => <Logo style={{ width: 40, height: 40 }} />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable className="flex-row items-center gap-2 p-2">
                <Entypo name="info-with-circle" size={24} color="red" />
              </Pressable>
            </Link>
          )
        }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen
          name="[id]"
          options={{
            title: 'Champion Details',
            headerBackVisible: true
          }}
        />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </View>
  )
}
