import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

// const config = {
//     header: {
//         'content-type': application/x-www-form-urlencoded
//     }
// }

export const login = (formdata, props) => ({
    type: 'POST_LOGIN',
    payload: Axios.post('http://192.168.100.113:3009/api/v1/user/login', formdata).then(
        result => {
            console.log('result', result);
            if (result.status === 200) {
                alert('Login berhasil')
                try {
                    AsyncStorage.setItem('KEY_TOKEN', result.data.result.token)
                    props.navigate('Home')
                } catch (error) {
                    console.log(error);
                    alert('gagal dong');
                }   
            } 
        },
    ),
});


export const register = (formdata, props) => ({
    type: 'POST_REGISTER',
    payload: Axios.post('http://192.168.100.113:3009/api/v1/user/register', formdata).then(
        result => {
            console.log('result', result);
            if (result.status === 200) {
                alert('register berhasil')
                try {
                    AsyncStorage.setItem('KEY_TOKEN', result.data.result.token)
                    props.navigate('Login')
                } catch (error) {
                    console.log(error);
                    alert('gagal dong');
                    
                }
            }
            
        },
    ),
})