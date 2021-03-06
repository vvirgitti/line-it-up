import React from 'react'
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native'
import Button from '../components/Button'
import {Picker} from '@react-native-picker/picker'
import {colours} from '../styles'
import AlignedInput from '../components/AlignedInput'


const Form  : React.FC = () => {
  const [name, setName] = React.useState('')
  const [position, setPosition] = React.useState('')
  const [gender, setGender] = React.useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add your players here</Text>
      <AlignedInput
        inputLabel="Name"
        inputValue={name}
        setInputValue={setName}
        placeholder="Derek Jeter"
      />
      <AlignedInput
        inputLabel="Field position"
        inputValue={position}
        setInputValue={setPosition}
        placeholder="Shortstop"
      />
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
  text: {
    color: `${colours.gold}`,
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  label: {
    color: `${colours.black}`,
    fontSize: 20,
    marginLeft: 5,
  }
})

export default Form