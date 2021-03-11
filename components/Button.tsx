import React from 'react';
import {TouchableOpacity, StyleSheet, Alert, Text} from "react-native";

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() =>Alert.alert('Someone wants to create a team')}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#E6C269',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    color: '#375A87',
  }
})

export default Button