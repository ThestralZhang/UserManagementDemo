import {DELETE_ACCOUNT, ADD_ACCOUNT, CONFIRM_EDIT, EDITING, START_EDIT, VALIDATE} from './actionTypes';

export const deleteAccount = id => ({
    type: DELETE_ACCOUNT,
    id
});

export const addAccount = (id, nickname, realname, email) => ({
    type: ADD_ACCOUNT,
    id,
    nickname,
    realname,
    email
});

export const confirmEdit = (id, nickname, realname, email) => ({
    type: CONFIRM_EDIT,
    id,
    info
});

export const editing = value => ({
    type: EDITING,
    value
});

export const startEdit = (id, nickname, realname, email) => ({
    type: START_EDIT,
    id,
    nickname,
    realname,
    email
});

export const validate = value => ({
    type: VALIDATE,
    value
});

