import React from 'react';
import {
  View, Text, ScrollView, StyleSheet
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

export default function HomePage() {
  return (
    <ScrollView>

      <View style={styles.container}>

        <Text style={styles.title}>Bem-vindo(a), Thais!</Text>

        <View style={styles.recipeBox}>

          <View>
          <FontAwesome5 name="briefcase-medical" size={24} color="black" />
          <Text>Loratadina</Text>
          </View>
          <View>
            <Text>Horário:</Text>
            <Text>8:00 - Todos os dias</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    paddingBottom: 24,
    marginBottom: 32,
    borderWidth: 0.8,
    borderColor: '#d3e2e6'
  },
  recipeBox: {
    width: 380,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#d3e2e6',
    justifyContent: 'center',
    alignItems: 'center',
  },

})