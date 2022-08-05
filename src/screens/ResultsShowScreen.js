import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    
    const getResult = async (id) => {
        const response = await yelp.get('/${id}');
        response.data
    }
  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen

