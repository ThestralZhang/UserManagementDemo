import {combineReducers} from 'redux';
import users from './users';
import fieldContents from './fieldContents';
import validateMsg from './validateMsg';

export default combineReducers({
    users,
    fieldContents,
    validateMsg
});
