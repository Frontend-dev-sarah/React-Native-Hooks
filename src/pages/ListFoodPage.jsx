import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HorizontalPost from '../components/HorizontalPost';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

export default function ListPage(props) {
    const [item, setItem] = useState('');
    const [ results, errorMessage, searchApi] = useResults();
    
    const filtreByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        });
    }

    return (
        <View style = {styles.container}>
            <SearchBar 
            searchItem = {item}
            onChangeItem = {(search) => {setItem(search)}}
            onSubmitEditing = {() => searchApi(item)}/>
            {errorMessage ? <Text>{errorMessage}</Text>:null}
            <ScrollView>
            <HorizontalPost
                title = "Cost Effective"
                results = {filtreByPrice('$')}
                // nav = {props.navigation.navigate}
            />
            <HorizontalPost
                title = "Pricer"
                results = {filtreByPrice('$$')}
            />
            <HorizontalPost
                title = "Big Expenser"
                results = {filtreByPrice('$$$')}
            />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    }
})