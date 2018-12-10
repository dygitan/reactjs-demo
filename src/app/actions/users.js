import axios from 'axios';
import restActions from '@app/actions/rest';

const ACTION_TYPES = {
    SET_USERS: 'SET_USERS'
};

const setUsers = users => {
    return {
        type: ACTION_TYPES.SET_USERS,
        payload: users
    };
};

const getUsers = () => dispatch => {
    dispatch(
        restActions.get(`https://reqres.in/api/users`, response => {
            dispatch(setUsers(response.data));
        })
    );
};

export default {
    ACTION_TYPES,
    getUsers
};
