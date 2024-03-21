
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [km, setKm] = useState(0)
  const [liter, setLiter] = useState(0)
  const [result, setResult] = useState('')

  function calcFuekConsumption(km, liter) {
    return  Math.round(km/liter)
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput style={styles.input} placeholder={'Enter a number'}
        value={km.toString()}
        onChangeText={(kmU) => setKm(kmU)}

      />

      <TextInput style={styles.input} placeholder={'Enter a number'}
        value={liter.toString()}
        onChangeText={(literU) => setLiter(literU)} />

      <Button
        title="Calculate"
        onPress={() => {
          setResult(`result: ${calcFuekConsumption(km, liter)}`)
        }}
      />

      <Text>{result}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 80,
  }
});
