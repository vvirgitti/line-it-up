import React from "react";
import {Text, View, StyleSheet} from "react-native";


const Form  : React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Add your players here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#375A87',
    alignItems: 'center',
  }
})

export default Form