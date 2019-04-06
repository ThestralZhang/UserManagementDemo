import {EDIT_ACCOUNT, DELETE_ACCOUNT, ADD_ACCOUNT} from './actionTypes';

let nextAccountId = 0;

export const editAccount = (id, info) => ({
    type: EDIT_ACCOUNT,
    id,
    info
});


export const deleteAccount = id => ({
    type: DELETE_ACCOUNT,
    id
});


export const addAccount = (info) => ({
    type: ADD_ACCOUNT,
    id: nextAccountId++,
    info
});