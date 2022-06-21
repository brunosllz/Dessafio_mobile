import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';



export function Products() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>
          Buscar
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92B9BD",
    paddingTop: getStatusBarHeight() + 50,
    paddingHorizontal: 24
  },
  text: {
    color: '#000',
    fontSize: 30
  },
});