import topicReducer from './Topic_Reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    topic: topicReducer
});

export default allReducers;