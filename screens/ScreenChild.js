import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ScreenChild() {
  return <ScrollView style={styles.container}></ScrollView>;
}

ScreenChild.navigationOptions = {
  title: 'Screen child'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
