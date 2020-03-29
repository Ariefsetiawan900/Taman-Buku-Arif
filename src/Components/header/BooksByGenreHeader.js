import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Arrow from '../../Assets/blackIcon.png'

const BooksByGenreHeader = props => {
  console.log('props', props);
  return (
    <View style={styles.header}>
      <View style={styles.ProfileNavbarContainer}>
        <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
          <Image source={Arrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}> Test</Text>
        <Text style={styles.navbarTitle}>{''}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    elevation: 8,
  },
  ProfileNavbarContainer: {
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    fontWeight: 'normal',
    
  },
  navbarTitle: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});
export default BooksByGenreHeader;