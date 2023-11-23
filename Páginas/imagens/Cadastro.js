import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Cadastro = ({ navigation }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmasenha] = useState('');
  const handleGravar = () => {
    alert('');
  };

const handleCadastro = () => {
  navigation.navigate('Login');
};

  return (
    <View style={[styles.container, { backgroundColor: 'lightblue' }]}>
      <Image
        style={styles.imagem}
        resizeMode="center"
        source={require('./imagens/saudelogobg.jpg')}
      />
      <Text style={[styles.label1, { marginBottom: 20, textAlign: 'center' }]}>
        Cadastro de Usuário
      </Text>

      {/* Input Container */}
      <View style={styles.inputContainer1}>
        <View>
          <Text style={styles.label2}>Nome de Usuário: </Text>
          <TextInput
            style={[styles.input, { width: 400 }]}
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
          />
        </View>
        <View>
          <Text style={styles.label2}> Nome : </Text>
          <TextInput
            style={[styles.input, { width: 400 }]}
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View>
          <Text style={styles.label2}> Senha : </Text>
          <TextInput
            style={[styles.input, { width: 400 }]}
            value={senha}
            secureTextEntry
            onChangeText={setSenha}
          />
        </View>
        <View>
          <Text style={styles.label2}> Confirme a Senha : </Text>
          <TextInput
            style={[styles.input, { width: 400 }]}
            value={confirmasenha}
            secureTextEntry
            onChangeText={setConfirmasenha}
          />
        </View>
      </View>

      {/* FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
      <View style={styles.ButtonContainer}>
        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label1: {
    color: 'blue',
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label2: {
    color: 'blue',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer1: {
    alignItems: 'center',
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    textAlign: 'left',
    marginBottom: 10,
  },
  imagem: {
    alignSelf: 'stretch',
    height: 70,
    marginTop: 5,
    marginBottom: 10,
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
});

export default Cadastro;
