import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { event, Value } from 'react-native-reanimated';

const TextInputPage = () => {

        const [name, setName] = useState('')
        const [password, setPassword] = useState('')
        console.log(password.length)

    return <View style = {styles.container}>
        <Text style={styles.font}>Enter Your Name</Text>
        <TextInput 
        style={styles.textInput} 
        placeholder = "Here is your name"
        autoCapitalize = 'none'
        autoCorrect = {false}
        value = {name}
        onChangeText = {(value) => setName(value)}/>
        <Text>Enter your password</Text>
        <TextInput
        style = {styles.textInput}
        placeholder = "Here is your password"
        autoCorrect = {false}
        autoCapitalize = "none"
        value = {password}
        onChangeText = {(value) => setPassword(value)}
        />

        <Text style={styles.font}>Your name is :</Text>    
        <Text style={[styles.font, {color: 'red', marginTop: 0, fontStyle: 'italic', fontSize: 20}]}>{name}</Text>
        <Text style={styles.font}>Your password :</Text> 
        <Text style = {{color: 'red'}}>{password.length == 0 ? null: password.length <= 8 ? 'should be more than 8 characters': 'is ok'}</Text>
    </View>
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center'
    },
    textInput: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: 30,
        width: 200
    },
    font: {
        fontSize: 30,
        marginVertical: 10,
        fontWeight: 'bold'
    }
})
export default TextInputPage;