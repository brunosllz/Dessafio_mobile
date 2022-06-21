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

interface NavigationProps {
  navigate: (
    screen: string,
    products?: {

    }
  ) => void;
}

const produtos = [
  {
    id: "1",
    title: "Novidades",
  },

  {
    id: "2",
    title: "Camisas",
  },

  {
    id: "3",
    title: "Calças",
  },
  {
    id: "4",
    title: "Moletons",
    products: [
      {
        id: '1',
        title: 'Moletom A',
        price: '500,00'
      },
      {
        id: '2',
        title: 'Moletom B',
        price: '500,00'
      },
      {
        id: '3',
        title: 'Moletom C',
        price: '500,00'
      }
    ]
  },
  {
    id: "5",
    title: "Vestidos",
  }
]

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  function handleProdutsPage() {
    navigation.navigate('Products')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá Luiz,{'\n'} tenha um otimo dia!
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.wrapper_button}>
          {
            produtos.map(item => (
              <Button
                key={item.id}
                title={item.title}
                onPress={() => handleProdutsPage(item)}
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