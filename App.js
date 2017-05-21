import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button } from './src/components/common';
import { Router } from './Router';


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

async componentDidMount() {
   await Font.loadAsync({
      'kanit-medium': require('./assets/fonts/Kanit-Medium.ttf'),
      'kanit-regular': require('./assets/fonts/Kanit-Regular.ttf')
      });

      this.setState({ fontLoaded: true });
    }


  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.container}>
          {
            this.state.fontLoaded ? ( <Router />) : null
          }

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
