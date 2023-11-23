import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (nomeUsuario === '@123' && senha === '123') {
      navigation.navigate('Quiz'); // Navega para a Tela do Quiz
      //LIMPANDO OS CAMPOS DE ENTRADAS DE DADOS
      setUsername('');
      setPassword('');
    } else {
      alert('Usuário e/ou Senha inválidos');
    }
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro'); // 'Cadastro' é o nome da tela de destino
  };
  
  const clickHandler = () => {
    alert('Projeto desenvolvido por Thiago Valladão e Júlia Teles');
  };

  return (
    //backgroundColor  -  COR DO FUNDO DA TELA
    <View style={[styles.container, { backgroundColor: 'lightblue' }]}>
      <Image
        style={styles.imagem}
        resizeMode="center"
        source={require('./imagens/saudelogobg.jpg')}
      />
      <Text style={[styles.label1, { marginBottom: -50, textAlign: 'center' }]}>
        Questionário de Rotina e Bem-Estar
      </Text>

      {/* Input Container */}
      <View style={styles.inputContainer1}>
        <View style={styles.inputGroup}>
          <Text style={styles.labelusuario}>Usuário </Text>
          <TextInput
            // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
            style={[styles.input, { width: 200, textAlign: 'center' }]}
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label2}> Senha</Text>
          <TextInput
            // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
            style={[styles.input, { width: 200, textAlign: 'center' }]}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
      </View>

      {/* FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
      <View style={styles.ButtonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
        <br></br>
        
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
        <Image
          source={{
            uri:
              '.\imagens\IMAGE-positivo.png',
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
    height: 200,
    size: 90,
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

export default Login;
