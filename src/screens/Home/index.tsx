import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Button } from '../../components/Button';
import { categories } from '../../utils/categories';

export interface IProducts {
  id: string;
  name: string;
  price: string;
}

export interface ICategories {
  id: string;
  name: string;
  products: IProducts[];
}

interface NavigationProps {
  navigate: (
    screen: string,
    category: {
      products: IProducts[]
    }
  ) => void;
}

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  function handleProdutsPage(products: IProducts[]) {
    navigation.navigate('Products', { products })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá Luiz,{'\n'} tenha um otimo dia!
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.wrapper_button}>
          {
            categories.map(category => (
              <Button
                key={category.id}
                title={category.name}
                onPress={() => handleProdutsPage(category.products)}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
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
  wrapper_button: {
    marginTop: 210,
  }
});