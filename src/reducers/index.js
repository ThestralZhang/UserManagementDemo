import {combineReducers} from 'redux';
import users from './users';
import fieldContents from './fieldContents';
import message from './message';

export default combineReducers({
    users,
    fieldContents,
    message
});
