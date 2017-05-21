import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common/Header.js';

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
    return (
      <View style={styles.container}>

          {
            this.state.fontLoaded ? ( <Header headerText="Tread on Trump" /> ) : null
          }

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
