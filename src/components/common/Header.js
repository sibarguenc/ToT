//Import libraries Header component
import React from 'react';
import { Text, View } from 'react-native';


//Make component
const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 25,
    color: '#000',
    fontFamily: 'kanit-medium'
  }
};


//Make component available to other parts of application
export  { Header };
