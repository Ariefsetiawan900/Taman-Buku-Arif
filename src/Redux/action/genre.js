import Axios from 'axios'

export const getGenre = () => {
    return {
        type: 'GET_GENRE',
        payload: Axios.get('http://192.168.100.113:3009/api/v1/genre')
    }
}