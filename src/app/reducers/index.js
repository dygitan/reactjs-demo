import { combineReducers } from 'redux';
import restActions from '@app/actions/rest';
import usersActions from '@app/actions/users';

const REST_INITIAL_STATE = {
    hasError: false,
    isLoading: true
};

const restReducer = (state = REST_INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case restActions.ACTION_TYPES.HAS_ERROR:
            return {
                ...state,
                hasError: true,
                error: payload
            };
        case restActions.ACTION_TYPES.IS_LOADING:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};

const USERS_INITIAL_STATE = {
    users: []
};

const usersReducer = (state = USERS_INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case usersActions.ACTION_TYPES.SET_USERS:
            return {
                ...state,
                users: payload
            };
        default:
            return state;
    }
};

export default combineReducers({
    restReducer,
    usersReducer
});
