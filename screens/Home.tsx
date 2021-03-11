import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Line It Up
      </Text>
      <Button text="Add players"/>
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