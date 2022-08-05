 import React, { useState, useEffect} from "react";
 import {View, Text, StyleSheet} from 'react-native';
 import SearchBar from "../components/SearchBar";
 import yelp from "../api/yelp";
  
 const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm, 
                    location:'Boston'
                }
            })
            console.log("response from yelp",response.data)
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('Pasta');
    }, [])
    

    return (
        <View style={styles.container}>
            <SearchBar term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
            />
            <View style={styles.resultContainer}>
                <Text>We have found {results.length} results</Text>
                {errorMessage? <Text>{errorMessage}</Text> : <Text></Text>}
            </View>
        </View>
    );
 };

 const styles = StyleSheet.create({
    resultContainer: {
        top: 30,
    }, 
    container: {
        marginHorizontal: 15
    }
 });

 export default SearchScreen;