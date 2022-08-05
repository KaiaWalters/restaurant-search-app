import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultCard from './ResultCard'

const ResultList = ({title, results, navigation}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>Results: {results.length}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            data={results}
            keyExtractor={(result) => {result.id}}
            renderItem={({item}) => {
                return( 
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                    <ResultCard result={item}/>
                </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }, 

    container: {
        marginBottom: 10 
    }
}); 

export default ResultList