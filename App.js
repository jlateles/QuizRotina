import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Login from './Páginas/Login'; // IMPORTANDO A TELA Login 
import Cadastro from './Páginas/Cadastro'; // IMPORTANDO A TELA Cadastro
import Quiz from './Páginas/Quiz'; // IMPORTANDO A TELA Quiz 
 

const Stack = createStackNavigator(); 
const App = () => { 
  return ( 

  <NavigationContainer> 
    <Stack.Navigator initialRouteName="Login"> 
    <Stack.Screen name="Login" component={Login} /> 
    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="Quiz" component={Quiz} /> 
    </Stack.Navigator> 
  </NavigationContainer> 
); 
}; 
export default App; 