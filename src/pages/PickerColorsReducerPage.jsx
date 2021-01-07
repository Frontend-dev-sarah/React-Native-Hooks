import React, { useReducer }from 'react';
import { Text, View } from 'react-native';
import ColorPart from '../components/ColorPart';


const reducer = (initialState, action) => {
    switch (action.type) {
        case 'CHANGE_RED':
            return initialState.colorRed + action.payload > 255 || initialState.colorRed + action.payload < 0 ? 
            initialState : 
            {...initialState, colorRed: initialState.colorRed + action.payload};
        case 'CHANGE_GREEN':
            return initialState.colorGreen + action.payload > 255 || initialState.colorGreen + action.payload < 0 ? 
            initialState : 
            {...initialState, colorGreen: initialState.colorGreen + action.payload};
        case 'CHANGE_BLUE': 
        return initialState.colorBlue + action.payload > 255 || initialState.colorBlue + action.payload < 0 ? 
        initialState : 
            { ...initialState, colorBlue: initialState.colorBlue + action.payload};
        default:
            return initialState;
    }

}

const PickerColorsReducerPage = () => {
    
    const [state, dispatch] = useReducer(reducer, {colorRed: 0, colorGreen: 0, colorBlue: 0});
    const { colorRed, colorGreen, colorBlue } = state;
  
    return (
        <View style={{alignItems: 'center'}}>
           <ColorPart 
            colorName = 'RED'
            colorText = 'red'
            buttonMore = 'More Red'
            buttonLess = 'Less Red'
            onPressMore = {() => dispatch({ type: 'CHANGE_RED', payload: 25})}
            onPressLess = {() => dispatch({type: 'CHANGE_RED', payload: -25})}
           />
           <ColorPart 
            colorName = 'GREEN'
            colorText = 'green'
            buttonMore = 'More Green'
            buttonLess = 'Less Green'
            onPressMore = {() => dispatch({type: 'CHANGE_GREEN', payload: 25})}
            onPressLess = {() => dispatch({type: 'CHANGE_GREEN', payload: -25})}
           />
           <ColorPart 
            colorName = 'BLUE'
            colorText = 'blue'
            buttonMore = 'More Blue'
            buttonLess = 'Less Blue'
            onPressMore = {() => dispatch({type: 'CHANGE_BLUE', payload: 25})}
            onPressLess = {() => dispatch({type: 'CHANGE_BLUE', payload: -25})}
           />
           <View style={{marginTop: 50, height: 100, width: 100, backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`}}/>
        </View>
    );
}



export default PickerColorsReducerPage;