import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Arrow from '../../Assets/Back-Icon.png'

const DetailHeader = props => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <TouchableOpacity opacity={0} onPress={props.backButton}>
          <Image source={Arrow} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageHeaderContainer}>
        <Image
          style={styles.imageHeader}
          source={{
            uri: props.data.image,
          }}
        />
      </View>
      <View style={styles.bookTitleContainer}>
        <Text style={styles.bookTitle}>{props.data.title}</Text>
      </View>
      <View style={styles.bookAuthorContainer}>
        <Text style={styles.bookAuthor}>Author's Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    // backgroundColor: 'red',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    zIndex: 2,
  },
  backIcon: {fontSize: 24, color: '#fff'},
  imageHeaderContainer: {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: 260,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  imageHeader: {
    opacity: 0.65,
    width: '100%',
    height: 260,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  bookTitleContainer: {
    // backgroundColor: '#000',
    width: '55%',
    marginLeft: 20,
    padding: 10,
    top: 50,
  },
  bookTitle: {
    fontSize: 22,
    color: '#fff',
  },
  bookAuthorContainer: {
    // backgroundColor: '#000',
    width: '55%',
    marginLeft: 20,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    top: 45,
  },
  bookAuthor: {
    fontSize: 18,
    color: '#fff',
  },
});
export default DetailHeader;