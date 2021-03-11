import React from "react";
import {Text, View, StyleSheet} from "react-native";


const Form  : React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add your players here</Text>
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
    fontSize: 20,
    marginTop: 40,
  }
})

export default Form