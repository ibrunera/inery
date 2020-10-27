import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Image
} from 'react-native';
import Constants from 'expo-constants';

import logoImg from '../assets/logo-medicine.png'

import { FontAwesome5, Feather } from '@expo/vector-icons';
import api from '../service/api';
import { useNavigation } from '@react-navigation/native';

interface Alarm {
  id: number;
  hour: number;
  minutes: number;
  week_days: Array<{
    week_day: number;
  }>
}

interface Recipe {
  id: number;
  name: string;
  medicine_id: number
  description: string;
  alarm: Array<Alarm>
}

export default function HomePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [alarms, setAlarms] = useState<Alarm[]>([])
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  // const navigation = useNavigation();

  // function navigateToDetail(recipes : Recipe) {
  //     navigation.navigate('Detail', { recipes });
  // }

  async function loadRecipes() {
    if (loading)
      return;

    // if (total > 0 && recipes.length === total)
    //   return;

    setLoading(true);

    const response = await api.get('/recipe', {
      headers: {
        authorization: 3
      }
    });

    setRecipes([...recipes, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>
            {total} alarmes
            </Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo(a)! Thais </Text>
      <Text style={styles.description}>Aqui estão seus alarmes. Fique atento(a)!!</Text>

    <View>

      <View style={styles.recipesList} >
      {recipes.map((recipe: Recipe) => (

          <View style={styles.recipes} key={recipe.id}>
            <Text style={styles.recipesValue}>{recipe.id}</Text>
            <Text style={styles.recipesProperty}>Nome:</Text>
            <Text style={styles.recipesValue}>{recipe.name}</Text>

            <Text style={styles.recipesProperty}>Horarios:</Text>
            <Text style={styles.recipesValue}>{recipe.alarm}</Text>


            <TouchableOpacity style={styles.detailsButton}
            // onPress={() => navigateToDetail(recipe)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
      ))}
      </View>
    </View>

     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  recipesList: {
    marginTop: 32
  },

  recipes: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  recipesProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  recipesValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold',
  }

})