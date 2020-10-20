import React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginPage() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.nextButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.withoutRegister}>Esqueceu a senha?</Text>
        <Text style={styles.withoutRegister}>Ainda não se cadastrou?</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#2867C3',
    justifyContent: 'center',
  },
  label: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 8,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#d3e2e6",
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  nextButton: {
    backgroundColor: "#87F7CC",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 28,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#1d153a'
  },
  withoutRegister: {
    color: '#87F7CC',
    marginTop: 8,
  }
})