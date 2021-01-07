import React from 'react';
import { TextInput,  View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({searchItem, onChangeItem, onSubmitEditing}) => {

    return <View style = {styles.container}>        
        <AntDesign name = 'search1' size = {25} color = 'black'/>
        <TextInput
          placeholder = 'Search'
          autoCapitalize = 'none'
          autoCorrect = {false}
          style = {styles.searchInput}
          value = {searchItem}
          onChangeText = {(search) => onChangeItem(search)}
          onEndEditing = {() => onSubmitEditing()}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(211,211,211)',
        paddingHorizontal: 10
    },
    searchInput: {
        padding: 15,
        borderRadius: 7,
        flex: 1
    }
})

export default SearchBar;