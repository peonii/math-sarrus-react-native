import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font'

export interface Coefficients {
  x: number
  y: number
  z: number
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Archivo': require('./assets/fonts/Archivo-Regular.ttf'),
    'ArchivoBold': require('./assets/fonts/Archivo-Bold.ttf')
  })

  const [coefOne, setCoefOne] = useState<Coefficients>()

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#cccccc',
    fontFamily: 'ArchivoBold',
    fontSize: 30,
    paddingHorizontal: 3,
  },
  horizontal: {
    flexDirection: 'row'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Archivo',
    fontSize: 30
  }
});
