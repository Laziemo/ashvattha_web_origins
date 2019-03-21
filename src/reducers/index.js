import {  combineReducers } from 'redux';

import bSReducer from './bSReducer';

export default combineReducers({
  bSelection: bSReducer
});
