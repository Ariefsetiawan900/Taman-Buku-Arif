import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import { connect } from 'react-redux'
import Axios from 'axios'

import { FlatList } from 'react-native-gesture-handler'
const URL_STRING = 'http://192.168.100.113:3009/api/v1/'

//const mapStateToProps = (book) =>{
//     return {
//         book
//     }
// }

const numColumns = 2
class BookList extends Component {
    state = {
        library: [],
    }
    componentDidMount = () => {
        this.getData()
    }
    getData = () =>{
        Axios.get(URL_STRING)
            .then(({ data }) =>{
                this.setState({ library: data.result })
            })
            .catch(err =>console.log(err));
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.onPress(item.id)}>
            <View>
                <View style={styles.photoContainer}>         
                    <Image style={{ width: 160, height: 200, borderRadius: 10 }} source={{ uri: item.image }}/> 
                </View>
                <View style={styles.textContainer}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title }>
                        {item.title} 
                    </Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                showVerticalScrollIndicator={false}
                data={this.state.library}
                renderItem={this.renderItem}
                // contentContainerStyle={{ paddingBotom: 200}}
                numColumns={numColumns}
                />
            </View>
        )
    }
}

export default BookList


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        // marginLeft: 20,
    },
    photoContainer:{
        borderRadius:10,
        width: 160,
        height:200,
        marginVertical:5,
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    textContainer: {
        backgroundColor: 'yellow',
        width:160,
        marginBottom: 15,
    },
    title: {
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold'
    },
})