import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Popular extends Component {
    render() {
        return (
            <View style={styles.popular}>
                <Text style={styles.titlePopular}>Popular Books</Text>
            </View>
        )
    }
}

export default Popular

const styles = StyleSheet.create({
    popular:{
        marginLeft: 20,
        marginRight: 26,
        height: 40,
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    titlePopular: {
        fontSize: 18,
        // fontFamily 'AirbnbCereal-Bold',
    },
})