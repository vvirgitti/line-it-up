import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Button from '../components/Button'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from '../types'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

interface HomeProps {
  navigation: HomeScreenNavigationProp
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Line It Up
      </Text>
      <Button text="Add players" action={() => navigation.navigate('Form')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#375A87',
    alignItems: 'center',
  },
  text: {
    color: '#E6C269',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40
  }
}
)

export default Home