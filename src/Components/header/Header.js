import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
// import Icon from 'react native-vector-icons/FontAwesome'

class Header extends Component {
    render() {
        return (
            <View style={styles.head}>
                <Text style={styles.title}>BOOKZ</Text>
                {/* <Icon name="search"style={styles.searchIcon} /> */}
                <TextInput style={styles.search} placeholder="Search..." />
            </View>
        )
    }
}

export default Header 

const styles = StyleSheet.create({
    // Header: {
    //     backgroundColor:'pink'
    // },
    head: {
        marginLeft: 30,
        marginRight:26,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'AirbnbVereal-Bold',
        fontSize: 16,
    },
    search: {
        width:'60%',
        paddingLeft: '15%',
        height: 38,
        backgroundColor: '#E5E6EE',
        fontFamily: 'AirbnbCereal-Bold'
    },
    searchIcon: {
        fontSize: 18,
        left: 50,
        zIndex: 1
    }
})