import React from 'react'
import Form from './Form'
import {fireEvent, render} from '@testing-library/react-native'
import {Alert} from 'react-native'

describe('Form', () => {
  it('shows an alert when a player is submitted', () => {
    const { getByPlaceholderText, getByText } = render(<Form />)
    const spyAlert = jest.spyOn(Alert, 'alert')

    fireEvent.changeText(getByPlaceholderText('Derek Jeter'), 'random name')
    fireEvent.changeText(getByPlaceholderText('Shortstop'), 'pitcher')
    fireEvent.press(getByText('Submit'))

    expect(spyAlert).toHaveBeenCalledWith('random name, pitcher')
  })
})
