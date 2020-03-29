import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Axios from 'axios';
import BooksByGenreHeader from '../Components/header/BooksByGenreHeader';

const URL_STRING = 'http://192.168.100.113:3009/api/v1/genres/';
const BooksByGenre = props => {
  const route = useRoute();
  const genreId = route.params.id_genre;
  // console.log('id', genreId);
  // console.log('', props.genreName);

  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const renderData = async () => {
      await getBookData();
      console.log('my genres', booksData);
    };

    renderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookData = () => {
    Axios.get(URL_STRING + genreId)
      .then(({data}) => {
        setBooksData(data.result);
        console.log('genres', data);
      })
      .catch(err => console.log(err));
  };

  const backButtonHandler = () => {
    props.navigation.navigate('Home');
  };
  const detailPageHandler = id => {
    props.navigation.navigate('BookDetail', {id: id});
  };

  const renderBooksItem = ({item, index}) => {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => detailPageHandler(item.id)}>
          <View style={[styles.photoContainer]}>
            <Image style={styles.photoImage} source={{uri: item.image}} />
          </View>
          <View style={styles.infoTextContainer}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BooksByGenreHeader onPress={backButtonHandler} />
      {/* <Text>{props.genreName}</Text> */}
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={booksData}
        renderItem={renderBooksItem}
        keyExtractor={item => String(item.id_genre)}
      />
    </View>
  );
};

export default BooksByGenre;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  listContainer: {
    flex: 1,
    // backgroundColor: 'grey',
    paddingLeft: 30,
    paddingTop: 25,
  },
  photoContainer: {
    borderRadius: 10,
    width: 160,
    height: 200,
    marginVertical: 5,
    flexDirection: 'row',

    backgroundColor: '#eee',
  },
  photoImage: {
    width: 160,
    height: 200,
    borderRadius: 10,
  },
  infoTextContainer: {
    // backgroundColor: 'yellow',
    width: 160,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});