import { combineReducers } from 'redux';

// Reducers
import randomReducer from './randomReducer';

export default combineReducers({
    randomReducer: randomReducer
})