import React from 'react';
import { Text, TouchableOpacityProps, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface ProductProps extends TouchableOpacityProps {
  name: string;
  price: string;
}

export function Product({ name, price, ...rest }: ProductProps) {

  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={styles.image} />

      <Text style={styles.nameText}>
        {name}
      </Text>
      <Text style={styles.priceText}>
        R$ {price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  image: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width / 2.5,
    height: 170,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15
  },
  priceText: {

  }
})