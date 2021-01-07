import React from 'react';
import { Image, View, Button, Text, StyleSheet } from 'react-native';

const ImagePart = (props) => {
    return(
    <View style = {{flexDirection: "row"}}>
        <Image source = {props.imageSrc}
        style = {{ height: 100, width: 100}}/>
        <View>
            <Text> {props.name} </Text>
            <Text> This is subcontents</Text>
        </View>
        
</View>
    ); 
    
}

const styles = StyleSheet.create({
    
})

export default ImagePart;