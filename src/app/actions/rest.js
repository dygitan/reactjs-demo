import axios from 'axios';

const ACTION_TYPES = {
    HAS_ERROR: 'HAS_ERROR',
    IS_LOADING: 'IS_LOADING'
};

const isLoading = (isLoading = true) => {
    return {
        type: ACTION_TYPES.IS_LOADING,
        payload: isLoading
    };
};

const handleError = error => {
    return {
        type: ACTION_TYPES.HAS_ERROR,
        payload: error
    };
};

const get = (url, callback) => dispatch => {
    dispatch(isLoading());
    axios
        .get(url)
        .then(response => {
            callback(response.data);
            dispatch(isLoading(false));
        })
        .catch(error => {
            dispatch(isLoading(false));
            dispatch(handleError());
        });
};

export default {
    ACTION_TYPES,
    get,
    isLoading
};
