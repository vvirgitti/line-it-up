import React from 'react'
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native'
import Button from '../components/Button'


const Form  : React.FC = () => {
  const [value, onChangeText] = React.useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add your players here</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Player's name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder={'Derek Jeter'}
          value={value}
          autoCorrect={false}
        />
      </View>
      <Button text="Submit" action={() => Alert.alert(`${value}`)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#E6C269',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10
  },
  label: {
    color: '#000000',
    fontSize: 20,
    marginLeft: 5,
  }
})

export default Form