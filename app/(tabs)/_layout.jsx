import { Tabs } from 'expo-router'
import Fontisto from '@expo/vector-icons/Fontisto'
// import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({ color, size }) => <Fontisto name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          title: 'About',
          tabBarIcon: ({ color, size }) => <Fontisto name="info" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}
