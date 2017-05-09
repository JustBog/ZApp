import reducer from '../areas/frontPage/reducers';
import { combineReducers } from 'redux';

/*
  Used to combine different reducers into global one
*/

export default combineReducers({frontPage: reducer});
