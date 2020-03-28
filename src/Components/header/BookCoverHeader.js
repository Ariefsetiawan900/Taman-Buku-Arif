import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const BookCoverHeader = props => {
  return (
    <View style={styles.bookCoverContainer}>
      <Image
        style={styles.bookCoverImage}
        source={{
          uri: props.data.image,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookCoverContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    width: '35%',
    height: 200,
    top: 90,
    right: 20,
    borderRadius: 10,
  },
  bookCoverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default BookCoverHeader;