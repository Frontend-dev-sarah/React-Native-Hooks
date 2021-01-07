import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (initialState, action) => {
    switch(action.type){
        case 'INCREASE':
            return {...initialState, count: initialState.count+action.payload};
        case 'DECREASE':
            return {...initialState, count: initialState.count+action.payload};
        default:
            return initialState;
    }
}


const CounterReducerPage = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return <View style = {styles.container}>
        <Button title = '+ Increase' onPress = {() => {dispatch({type: 'INCREASE', payload: +1})}}/>
        <Button title = '- Decrease' onPress = {() => {dispatch({type: 'DECREASE', payload: -1})}}/>
        <Text style={styles.count}>Current Count:</Text>
<Text style={styles.counter}>{state.count}</Text>
    </View>
}
const styles  = StyleSheet.create({
    container: {
        margin: 40,
        alignItems: 'center'
    },
    count: {
        fontSize: 30,
        fontWeight: 'bold',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 30
    },
    counter: {
        marginTop: 20,
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',
        
    }
})
export default CounterReducerPage;