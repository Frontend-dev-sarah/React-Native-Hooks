import React, { useState }from 'react';
import { Text, View } from 'react-native';
import ColorPart from '../components/ColorPart';

const PickerColorsPage = () => {
    

    const [ colorRed, setColorRed] = useState(0);
    const [ colorGreen, setColorGreen] = useState(0);
    const [ colorBlue, setColorBlue ] = useState(0);
   

    
    const onChangeColor = (color, onChange) => {
        switch(color) {
            case 'colorRed':
               colorRed + onChange > 255 ? 255 : colorRed + onChange < 0 ? 0 : setColorRed(colorRed + onChange)
                return;
            case 'colorGreen':
                colorGreen + onChange > 255 ? 255 : colorGreen + onChange < 0 ? 0 : setColorGreen(colorGreen + onChange)
                return;
            case 'colorBlue':
                colorBlue + onChange > 255 ? 255 : colorBlue + onChange < 0 ? 0 : setColorBlue(colorBlue + onChange)
                return;
            default:
                return;
        }
    }
  
    return (
        <View style={{alignItems: 'center'}}>
           <ColorPart 
            colorName = 'RED'
            colorText = 'red'
            buttonMore = 'More Red'
            buttonLess = 'Less Red'
            onPressMore = {() => onChangeColor('colorRed', 15)}
            onPressLess = {() => onChangeColor('colorRed', -15)}
           />
           <ColorPart 
            colorName = 'GREEN'
            colorText = 'green'
            buttonMore = 'More Green'
            buttonLess = 'Less Green'
            onPressMore = {() => onChangeColor('colorGreen', 15)}
            onPressLess = {() => onChangeColor('colorGreen', -15)}
           />
           <ColorPart 
            colorName = 'BLUE'
            colorText = 'blue'
            buttonMore = 'More Blue'
            buttonLess = 'Less Blue'
            onPressMore = {() => onChangeColor('colorBlue', 15)}
            onPressLess = {() => onChangeColor('colorBlue', -15)}
           />
           <View style={{marginTop: 50, height: 100, width: 100, backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`}}/>
        </View>
    );
}



export default PickerColorsPage;