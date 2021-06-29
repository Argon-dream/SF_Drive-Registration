import { combineReducers } from 'redux';

import { registration } from "./registration/reducer";

export default combineReducers({
    registration: registration,
});