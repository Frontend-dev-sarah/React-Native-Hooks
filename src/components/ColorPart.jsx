import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ColorPart = (props) => {
    return(
        <View style = {styles.container}>
            <Text style={[styles.colorName, {color: props.colorText}]}>{props.colorName}</Text>
            <Button title = {`+ ${props.buttonMore}`}
            onPress={() => props.onPressMore()}/>
            <Button title = {`- ${props.buttonLess}`}
            onPress={() => props.onPressLess()}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },
    colorName: {
        fontSize: 30
    }
})
export default ColorPart;