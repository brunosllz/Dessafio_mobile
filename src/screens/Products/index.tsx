import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Product } from '../../components/Product';
import { Categories } from '../Home';

interface Params {
  category: Categories
}

export function Products() {
  // const [havaCategory, setHaveCategory] = useState({} as Categories)
  const route = useRoute();
  const { category } = route.params as Params;

  // useEffect(() => {
  //   setHaveCategory(category)
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Buscar
      </Text>

      <ScrollView style={styles.productsList}>
        <View style={styles.productsWrapper}>
          {
            category.products.map(product => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
              />
            ))
          }
        </View>

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
  productsList: {
    flex: 1,
    marginTop: 32
  },
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});