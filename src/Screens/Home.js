import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import Header from '../Components/header/Header'
import Popular from '../Components/popular/Popular'
import BookList from '../Components/booklist/BookList'
import Genre from '../Components/genre/Genre'

class Home extends Component {
    state = {
        bookData: [],
    }
    detailPageHandler = id => {
        this.props.navigation.navigate('BookDetail', {id: id});
      };
    
      booksByGenrePageHandler = id => {
        this.props.navigation.navigate('BooksByGenre', {id_genre: id});
      };
	render() {
	    return (
	<View style={styles.container}>
        <Header />
        <Genre />
        <Popular />
        <BookList onPress={this.detailPageHandler} /> 
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
