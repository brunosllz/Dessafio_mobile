import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import { Button } from '../../components/Button';

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
  },

  {
    id: "5",
    title: "Vestidos",
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container_2}>
        <View style={styles.wrapper_button}>
          {
            produtos.map(item => (
              <Button key={item.id} title={item.title} />
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
  },

  container_2: {

  },

  scroll: {
    width: 300,
    height: 200,
    marginTop: 100,
    marginLeft: 30,
  },

  foto: {
    width: 100,
    height: 100,
  },

  botao: {
    borderRadius: 20,
    width: 50,

  },

  wrapper_button: {
    paddingHorizontal: 15,
    marginTop: 210,
  },

})