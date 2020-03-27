import React, { Component } from 'react'
import { SafeAreaView,View, Text, StyleSheet, Image } from 'react-native'
import Axios from 'axios'

import { FlatList } from 'react-native-gesture-handler'
const URL_STRING = 'http://192.168.100.113:3009/api/v1/genre' //sesuai database

class Genre extends Component {
    state = {
        genre:[],
    }
    componentDidMount = () => {
        this.getGenre()
    }
    getGenre = () => {
        Axios.get(URL_STRING)
            .then(({ data }) => {
                this.setState({ genre: data.result})
            })
            .catch(err => console.log(err))
    }
    renderItem = ({ item, index }) => {
        return (
            //<View style={{ alignItems: 'center'}}> sesuai genre
            <View style={[styles.cardContainer, {backgroundColor: item.color_genre}]}>
                <Image style={{ width: 124.63, height: 180}} source={item.image_genre} />
                <Text>{item.name_genre}</Text>
            </View>
        )
    }
    render() {
        return(
            <View style={styles.container}>
                <FlatList showHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.genre}
                    renderItem={this.renderItem}
                    />
            </View>
        )
    }
}
export default Genre

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 5,
        marginLeft: 30,
        backgroundColor:'grey',
        flexDirection:'row',
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    // item:{
    //     borderRadius: 20,
    //     width:300,
    //     height: 150,
    //     marginRight: 30,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-around'
    //}
    cardContainer:{
        borderRadius: 20,
        width: 241,
        height:116,
        marginLeft:15,
        marginRight: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    // genreContainer: {
    //     flex: 1,
    //     height: 100,
    //     marginTop: 20,
    //     marginBottom:20,
    //     marginLeft: 30,
    //     backgroundColor;'grey',
    //     flexDirection:'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // }
})