import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import yelp from '../api/yelp';

const WIN_WIDTH =  Dimensions.get('window').width

const FoodDetail = ({route}) => {
    const { itemId } = route.params
    const [itemInfo, setItemInfo] = useState(null);
    
    const getItemInfo = async(itemId) => {
        const response = await yelp.get(`/${itemId}`);
        setItemInfo(response.data);
    }

    useEffect(() => {
        getItemInfo(itemId);
    }, [])

    if(!itemInfo) {
        return null;
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{itemInfo.name}</Text>
            <FlatList
                data = {itemInfo.photos}
                keyExtractor = {(item) => item}
                renderItem = {({item, index}) => <Image resizeMode = "cover" key = {item} source = {{uri: item}} style = {styles.image}/>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20
    },
    image: {
        height: WIN_WIDTH*1.2,
        width: WIN_WIDTH,
        marginTop: 5
    }
})
export default FoodDetail;