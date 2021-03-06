import React, { Component } from 'react'
import { SafeAreaView,View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Axios from 'axios'
import { getGenre } from '../../Redux/action/genre'
import { connect } from 'react-redux'

import { FlatList } from 'react-native-gesture-handler'

const URL_STRING = 'http://192.168.100.113:3009/api/v1/genre' //sesuai database

class Genre extends Component {
    state = {
        genre:[],
        
    }
    componentDidMount = () => {
        this.getGenres()
    }
    // getGenres = () => {
    //     Axios.get(URL_STRING)
    //         .then(({ data }) => {
    //             this.setState({ genre: data.result})
    //         })
    //         .catch(err => console.log(err))
    // }
     getGenres = async () => {
            await this.props.dispatch(getGenre())
            this.setState({
                genre: this.props.genre.genre.data.data.result
            })
        }
    renderItem = ({ item, index }) => {
        return (
            //<View style={{ alignItems: 'center'}}> sesuai genre
            <TouchableOpacity
            activeOpacity={0.6}
            genreName={item.genre_name}
            onPress={() => this.props.onPress(item.id_genre)}>
            <View style={[styles.cardContainer, {backgroundColor: item.color_genre}]}>
                <Image style={{ width: 102, height: 100}} source={{ uri: item.image_genre}} />
                <Text style={styles.textTitle}>{item.genre_name}</Text>
            </View>
            </TouchableOpacity>
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
const mapStateToProps = genre => {
    return {
        genre,
    }
}
// export default Genre
 export default connect(mapStateToProps)(Genre)

const styles = StyleSheet.create({
    container: {

        marginTop: 5,
        marginLeft: 30,
        // backgroundColor:'grey',
        flexDirection:'row',
        alignItems: 'center'
    },
    item:{
        borderRadius: 20,
        width:300,
        height: 150,
        marginRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cardContainer:{
        borderRadius: 20,
        width: 241,
        height:116,
        marginLeft:15,
        marginRight: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
       
    },
    genreContainer: {
        flex: 1,
        height: 100,
        marginTop: 20,
        marginBottom:20,
        marginLeft: 30,
        backgroundColor: 'grey',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        color: 'white'
    }
})