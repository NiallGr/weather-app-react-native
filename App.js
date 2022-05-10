import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function App() {

 const [errorMessage, setErrorMessage] =useState(null)

useEffect(() => {
  load()
}, [])
async function load() {
  try {
    let {status} = await Location.requestForegroundPermissionsAsync();

    if(status != 'granted') {
      setErrorMessage('Access to location is neeeded to run the app')
      return
    }
    const location = await Location.getCurrentPositionAsync()

    const {latitude, longitude} = location.coords;

    alert(`latitude: ${latitude}, longitude : ${longitude}`)
  } catch (error) {

  }
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Hellofffg!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
