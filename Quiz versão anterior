import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Quiz = ({ navigation }) => {
  const clickHandler = () => {
    alert('Alunos: Thiago Valladão e Júlia Teles');
  };

  return (
    //backgroundColor  -  COR DO FUNDO DA TELA
    <View style={[styles.container, { backgroundColor: 'lightblue' }]}>
      <Image
        style={styles.imagem}
        resizeMode="center"
        source={require('./imagens/saude.png')}
      />
      <Text style={[styles.label1, { marginBottom: -50, textAlign: 'center' }]}>
        Questionário de Rotina e Bem-Estar
      </Text>

      {/* FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
        <Image
          source={{
            uri:
              'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png',
          }}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
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
  labelusuario: {
    marginTop: 100,
    color: 'blue',
    fontSize: 18,
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
    size: 50,
    marginTop: 5,
    marginBottom: 10,
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
});

export default Quiz;
