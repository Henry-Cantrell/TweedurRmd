import { combineReducers } from 'redux';
import { authToggle } from './authtoggle'
import { currentUserUid } from './currentuseruid'
import {  signPageToggle } from './signpagetoggle'

export const masterReducer = combineReducers({
    userLoginStatus: authToggle,
    currentUserUid: currentUserUid,
    signPageToggle: signPageToggle,
})