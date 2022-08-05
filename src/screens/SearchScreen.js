 import React, { useState} from "react";
 import {View, Text, StyleSheet, ScrollView} from 'react-native';
 import SearchBar from "../components/SearchBar";
 import ResultsList from '../components/ResultList'
 import useResults from '../hooks/useResults';
  
 const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [ results, searchAPI, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            if(result.price === price) {
                return result
            } 
        })
    }

    return (
        <>
            <View>
                <SearchBar term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}
                />
            
                <Text style={styles.resultDetails}>We have found {results.length} results</Text>
                {errorMessage? <Text style={styles.resultDetails}>{errorMessage}</Text> : <Text></Text>}
            </View>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cheap'/>
                <ResultsList results={filterResultsByPrice('$$')} title='Pricey'/>
                <ResultsList results={filterResultsByPrice('$$$')} title='Thieves'/>
            </ScrollView>
        </>
    );
 };

 const styles = StyleSheet.create({
    resultDetails: {
        top:20
    }
 });

 export default SearchScreen;