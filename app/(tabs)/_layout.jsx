import { Tabs } from 'expo-router'
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'

export default function Layout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" color="blue" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <Icon sf="info.circle" drawable="custom_info_drawable" color="red" />
        <Label>About</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
