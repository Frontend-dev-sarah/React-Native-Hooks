import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';


const PickerPage = () => {
    const [colors, setColors] = useState([]);
    
    const renderItem = ({item, index}) => {
        return(
            <View 
            style={{ height: 100, width: 100, backgroundColor: item}}
            key = {index}
            />
        )
    }
  
    return (
        <View>
            <Button title = "Take a color"
            onPress = {()=> {
                setColors([...colors, pickColorRGB()])
            }}/>

            <FlatList
                keyExtractor = {item => item}
                data = {colors}
                renderItem = {renderItem}             
            />
            
        </View>
    );
}

const pickColorRGB = () => {
    const red = Math.ceil(Math.random()*255);
    const green = Math.ceil(Math.random()*255);
    const blue = Math.ceil(Math.random()*255);
    
    return `rgb(${red}, ${green}, ${blue})`
}
const styles = StyleSheet.create({
    PickColor: {
        backgroundColor: 'green'
    },

})
export default PickerPage;