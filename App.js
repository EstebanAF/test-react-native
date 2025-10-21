import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable
} from 'react-native'
import icon from './assets/icon.png'

const uriImage =
  'data:image/png;base64,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'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app testsing!</Text>
      <StatusBar style="dark" />
      <Image
        fadeDuration={1000}
        source={{
          uri: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?_gl=1*so1mq0*_ga*NDc3MjkwNDY1LjE3NjEwMjMxNDg.*_ga_8JE65Q40S6*czE3NjEwMjMxNDgkbzEkZzEkdDE3NjEwMjMxNTIkajU2JGwwJGgw'
        }}
        style={styles.image}
      />
      <Button title="Click me" onPress={() => alert('Button pressed')} color="red" />
      <TouchableHighlight
        underlayColor="red"
        onPress={() => alert('TouchableHighlight pressed')}
        style={styles.button}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => alert('TouchableOpacity pressed')}
        style={styles.button}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <Pressable
        underlayColor="green"
        android_ripple={{ color: 'red' }}
        onPress={() => alert('Pressable pressed')}
        style={styles.button}>
        <Text>Pressable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'center'
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
