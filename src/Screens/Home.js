import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import Header from '../Components/header/Header'
import Popular from '../Components/popular/Popular'
import BookList from '../Components/booklist/BookList'
import Genre from '../Components/genre/Genre'

class Home extends Component {
	render() {
	    return (
	<View style={styles.container}>
        <Header />
        <Genre />
        <Popular />
        <BookList /> 
    </View>
        )
    }
} 

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
})
