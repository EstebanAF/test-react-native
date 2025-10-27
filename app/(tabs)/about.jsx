import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import Fontisto from '@expo/vector-icons/Fontisto'
import { styled } from 'nativewind'
import Screen from '../../components/Screen'

// const StyledPressable = styled(Pressable)

export default function About() {
  return (
    <Screen className="flex-1 items-center justify-start h-screen mt-24">
      <Link asChild href="/" className=" mb-10">
        <Pressable className="active:opacity-50 ">
          <Fontisto name="home" size={24} color="blue" />
        </Pressable>
      </Link>

      <Text className="text-xl font-bold text-blue-500">About US</Text>
      <Text className="text-base text-gray-500">
        We are a team of developers who are passionate about creating beautiful and functional web
        applications.
      </Text>
      <Text className="text-base text-gray-500">
        We are a team of developers who are passionate about creating beautiful and functional web
        applications.
      </Text>
      <Text className="text-base text-gray-500">
        We are a team of developers who are passionate about creating beautiful and functional web
        applications.
      </Text>
    </Screen>
  )
}
