import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import icedCoffeeImg from '../../assets/images/iced-coffee.png'

import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImg}
      resizeMode='cover'
      style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop - Lesson02</Text>
        
        <Text style={styles.text}>Working Hours</Text>
        <Text style={styles.text}>Location</Text>
        <Text style={styles.text}>Still Working</Text>
      </ImageBackground>
      
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 20
  }
})