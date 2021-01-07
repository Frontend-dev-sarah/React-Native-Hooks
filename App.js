import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/HomePage';
import ListFoodPage from './src/pages/ListFoodPage';
import PickerPage from './src/pages/PickerPage';
import PickerColorsPage from './src/pages/PickerColorsPage';
import PickerColorsReducerPage from './src/pages/PickerColorsReducerPage';
import CounterReducerPage from './src/pages/CounterReducerPage';
import TextInputPage from './src/pages/TextInputPage';
import FoodDetailPage from './src/pages/FoodDetailPage';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <HomePage/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ListFood" component={ListFoodPage} />
      <Stack.Screen name ="FoodDetail" component = {FoodDetailPage}/>
      <Stack.Screen name ="Picker" component={PickerPage}/>
      <Stack.Screen name="PickerColors" component={PickerColorsPage}/>
      <Stack.Screen name ="PickerColorsReducer" component={PickerColorsReducerPage} />
      <Stack.Screen name = "CounterReducer" component = {CounterReducerPage}/>
      <Stack.Screen name = "TextInput" component = {TextInputPage}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
