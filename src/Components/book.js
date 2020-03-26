import React from 'react';
import {
    View,
    Text
} from 'react-native';

export const Book = props => {
    return(
        <View>
            <Text>Ini Buku {props.title}</Text>
        </View>
    )
}

