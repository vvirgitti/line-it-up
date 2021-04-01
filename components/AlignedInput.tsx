import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {colours} from '../styles'

interface AlignedInputProps {
  inputLabel: string
  placeholder: string
  inputValue: string
  setInputValue: (value: string) => void
}

const AlignedInput: React.FC<AlignedInputProps> = ({ inputLabel, placeholder, inputValue, setInputValue }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{inputLabel}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputValue(text)}
        placeholder={placeholder}
        value={inputValue}
        autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default AlignedInput