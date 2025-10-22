import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './components/Main'
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.body}>
        <StatusBar style="dark" />

        <Main />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffeeee',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'scroll'
  }
})
