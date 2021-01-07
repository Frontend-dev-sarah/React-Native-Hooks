import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FoodItem from '../components/FoodItem';


const HorizontalPost = ({ title, results, nav }) => {
    const navigation  = useNavigation();
    const renderItem = (item, index) => {
        
        return (
            <TouchableOpacity onPress= {() => {navigation.navigate("FoodDetail", {itemId: item.id})}}>
            <FoodItem result = {item}/>      
            </TouchableOpacity>
        )
    }
    if(!results.length) {
        return null;
    }
    
    return <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
        
        <FlatList
        data = {results}
        style = {styles.flatList}
        horizontal = {true}
        keyExtractor = {(item) => item.id}
        showsHorizontalScrollIndicator = {false}
        renderItem = {({item, index}) => renderItem(item, index)}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    flatList: {
    
    }
})

export default HorizontalPost;