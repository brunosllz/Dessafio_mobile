import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Product } from '../../components/Product';
import { IProducts } from '../Home';
import { BackButton } from '../../components/BackButton';

interface Params {
  products: IProducts[];
}

export function Products() {
  const route = useRoute();
  const { products } = route.params as Params;
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBack} />

      <Text style={styles.text}>
        Buscar
      </Text>

      <ScrollView style={styles.productsList}>
        <View style={styles.productsWrapper}>
          {
            products.map(product => (
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
    paddingTop: getStatusBarHeight() + 32,
    paddingHorizontal: 24
  },
  text: {
    color: '#000',
    fontSize: 24,
    marginTop: 32
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