import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
        <Feather style={styles.iconStyle} name="search"/>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing ={onTermSubmit}
        />
    </View>

  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#e2e2e2',
        height: 50, 
        borderRadius: 5, 
        flexDirection: 'row',
        top: 20
    },
    inputStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize:30,
        alignSelf: 'center',
        marginHorizontal:5
    }

})
export default SearchBar