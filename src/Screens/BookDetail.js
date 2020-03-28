import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DetailHeader from '../Components/header/DetailHeader';
import BookCoverHeader from '../Components/header/BookCoverHeader';
import Axios from 'axios';

// const bookID = this.props.get.params.id;
// console.log('my id', bookID);
const URL_STRING = 'http://192.168.100.113:3009/api/v1/';
const BookDetail = props => {
  const route = useRoute();
  const bookId = route.params.id;

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const renderData = async () => {
      await getBookData();
      console.log('my book', bookData);
    };

    renderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookData = () => {
    Axios.get(URL_STRING + bookId)
      .then(({data}) => {
        setBookData(data.result[0]);
        console.log('data', data.result[0]);
      })
      .catch(err => console.log(err));
  };

  const backButtonHandler = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <DetailHeader data={bookData} backButton={backButtonHandler} />
      <BookCoverHeader data={bookData} />
      <ScrollView
        style={styles.descriptionContainer}
        vertical={true}
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.descriptionText}>{bookData.description}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.rentBook}>RENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 0,
  },
  descriptionContainer: {
    // backgroundColor: 'yellow',
    marginTop: 120,
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  rentBook: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 55,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4CF5D',
  },
});