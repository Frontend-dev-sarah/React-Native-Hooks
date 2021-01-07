import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class HomePage extends Component {
    render () {
        return (
        <View>
             <Button title = 'Go to PickerPage'
           onPress = {()=> this.props.navigation.navigate("Picker")}/>   
            <Button title='Go to FoodListPage'
            onPress = {()=> this.props.navigation.navigate('ListFood')}/>  
            <Button title= 'Go to PickerColorsPage Reducer' 
            onPress={()=> this.props.navigation.navigate('PickerColorsReducer')}/>
            <Button title = 'Go to Counter Reducer'
            onPress = {()=> {this.props.navigation.navigate('CounterReducer')}}/>
            <Button title = 'Go to TextInput Page'
            onPress = {()=> {this.props.navigation.navigate('TextInput')}}/>
        </View>
        );
    }
}