import {EDIT_ACCOUNT, DELETE_ACCOUNT, ADD_ACCOUNT} from './actionTypes';


export editAccount = (id, info) => ({
    type: EDIT_ACCOUNT,
    id,
    info
});


export deleteAccount = id => ({
    type: DELETE_ACCOUNT,
    id
});


export addAccount = (id, info) => ({
    type: ADD_ACCOUNT,
    id,
    info
});