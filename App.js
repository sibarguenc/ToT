import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common/Header.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tread on Trump" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
