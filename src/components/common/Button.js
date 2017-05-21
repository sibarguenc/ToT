import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, buttonText }) => {

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'kanit-medium'
  },

  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 100,
    borderWidth: 0,
    height: 50,
    width: 200
  }
}
export { Button };
