import React from 'react'
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native'
import Button from '../components/Button'
import {Picker} from '@react-native-picker/picker'
import {colours} from '../styles'


const Form  : React.FC = () => {
  const [name, setName] = React.useState('')
  const [position, setPosition] = React.useState('')
  const [gender, setGender] = React.useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add your players here</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          placeholder={'Derek Jeter'}
          value={name}
          autoCorrect={false}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Field position</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPosition(text)}
          placeholder={'Shortstop'}
          value={position}
          autoCorrect={false}
        />
      </View>
      <View>
        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Female" value="female"/>
          <Picker.Item label="Male" value="male"/>
          <Picker.Item label="Non-binary" value="nonBinary"/>
        </Picker>
      </View>
      <Button text="Submit" action={() => Alert.alert(`${name}, ${position}`)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: `${colours.white}`,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: `${colours.gold}`,
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
    marginRight: 10,
    paddingLeft: 5,
  },
  label: {
    color: `${colours.black}`,
    fontSize: 20,
    marginLeft: 5,
  }
})

export default Form