import axios from 'axios';
import restActions from '@app/actions/rest';

const ACTION_TYPES = {
    SET_USER: 'SET_USER',
    SET_USERS: 'SET_USERS'
};

const setUser = user => {
    return {
        type: ACTION_TYPES.SET_USER,
        payload: user
    };
};

const setUsers = users => {
    return {
        type: ACTION_TYPES.SET_USERS,
        payload: users
    };
};

const getUserById = id => dispatch => {
    dispatch(
        restActions.get(`https://reqres.in/api/users/${id}`, response => {
            dispatch(setUser(response.data));
        })
    );
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
    getUserById,
    getUsers
};
