const initialValue = {
    genredata: [],
    errorMsg: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
    
}

const genreReducers = (state = initialValue, action) => {
    switch (action.type) {
        case "GET_GENRE_PENDING":
            return {
                ...state,
                isPending: false,
                isFulfilled: false
            }
        case "GET_GENRE_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errorMsg: action.payload.data
            }
        case "GET_GENRE_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                data: action.payload
            }
           
            default: 
                return state;
    }
}

export default genreReducers;