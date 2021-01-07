import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FoodItem  = ({result, nav}) => {
    return (
        <View style = {styles.container}>
            <Image 
            source = {{ uri: result.image_url}}
            style = {styles.image}
            />
            <Text style = {styles.name}> {result.name}</Text>
            <Text>{`${result.rating} stars, ${result.review_count} reviews`}</Text>

        </View>
    )
}
const styles  = StyleSheet.create({
    container: {
        margin: 5,
        marginBottom: 15
    },
    image: {
        height: 120,
        width: 240
    },
    name: {
        fontWeight: 'bold'

    }
})

export default FoodItem;